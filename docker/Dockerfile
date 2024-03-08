FROM ubuntu:latest

ENV BUILD=/build

RUN mkdir $BUILD
WORKDIR $BUILD
RUN apt-get update && \
    apt-get install -y git cmake clang ninja-build wget xz-utils libgmp-dev curl
ENV WASISDK=$BUILD/wasi-sdk/build/install/opt/wasi-sdk

# install wasmtime, needed by wasi runtime
RUN curl https://wasmtime.dev/install.sh -sSf | bash
ENV PATH="/root/.wasmtime/bin:$PATH"

# build wasi-sdk
RUN git clone --recursive https://github.com/WebAssembly/wasi-sdk.git && \
    cd wasi-sdk && \
	 NINJA_FLAGS=-v make package

# build gmp library for wasi target
RUN wget https://gmplib.org/download/gmp/gmp-6.3.0.tar.xz && \
    tar xvf gmp-6.3.0.tar.xz && \
    cd $BUILD/gmp-6.3.0 && \
    ./configure --host=wasm32-unknown-wasi \
		  CC=$WASISDK/bin/clang \
		  RANLIB=$WASISDK/bin/ranlib \
		  CFLAGS=-D_WASI_EMULATED_SIGNAL LDFLAGS=-lwasi-emulated-signal \
		  --prefix=$BUILD/gmp-wasi-INSTALL && \
    make && make install

# install mlton binaries (for bootstrapping custom mlton)
WORKDIR $BUILD
RUN wget https://github.com/MLton/mlton/releases/download/on-20210117-release/mlton-20210117-1.amd64-linux-glibc2.31.tgz && \
    tar xvzf mlton-20210117-1.amd64-linux-glibc2.31.tgz && \
    cd $BUILD/mlton-20210117-1.amd64-linux-glibc2.31 && make install

# get agoode/mlton fork at branch wasm2, which at time of writing was commit hash d2b9e5d3ea
RUN git clone -b wasm2 https://github.com/agoode/mlton mlton

# build mlton binary
RUN cd mlton && \
    export MLTON=$BUILD/mlton-INSTALL && \
    make all && \
    make PREFIX=$MLTON install

# build wasm runtime
RUN cd mlton && make clean && \
    make \
		  CC=$WASISDK/bin/clang \
		  AR=$WASISDK/bin/ar \
		  RANLIB=$WASISDK/bin/ranlib \
		  TARGET_OS=wasi \
		  TARGET_ARCH=wasm32 \
		  TARGET=wasm32-unknown-wasi \
		  WITH_GMP_DIR=$BUILD/gmp-wasi-INSTALL \
		  PREFIX=$BUILD/mlton-INSTALL \
		  dirs runtime install-runtime

# patch the lack of existence of svnversion, needed for twelf build
RUN echo '#!/bin/bash\ngit rev-parse HEAD' > /usr/bin/svnversion && \
    chmod +x /usr/bin/svnversion

# build twelf binary in $BUILD/twelf/bin/twelf.wasm
RUN git clone https://github.com/standardml/twelf && \
    cd twelf && \
    make mlton="$BUILD/mlton-INSTALL/bin/mlton \
        -default-ann 'nonexhaustiveMatch ignore' \
        -default-ann 'nonexhaustiveBind ignore'" \
        wasi
