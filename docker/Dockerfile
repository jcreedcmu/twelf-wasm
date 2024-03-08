FROM ubuntu:latest

RUN mkdir /build
WORKDIR /build
RUN apt-get update
RUN apt-get install -y git

# wasi-sdk
RUN git clone --recursive https://github.com/WebAssembly/wasi-sdk.git && \
    cd wasi-sdk && \
	 apt-get install -y cmake clang ninja-build && \
	 NINJA_FLAGS=-v make package

# XXX move up eventually
ENV BUILD=/build
RUN apt-get install -y wget xz-utils

# gmp
RUN wget https://gmplib.org/download/gmp/gmp-6.3.0.tar.xz && \
    tar xvf gmp-6.3.0.tar.xz
WORKDIR $BUILD/gmp-6.3.0
# XXX get rid of this WORKDIR ^

ENV WASISDK=$BUILD/wasi-sdk/build/install/opt/wasi-sdk

RUN ./configure --host=wasm32-unknown-wasi \
		  CC=$WASISDK/bin/clang \
		  RANLIB=$WASISDK/bin/ranlib \
		  CFLAGS=-D_WASI_EMULATED_SIGNAL LDFLAGS=-lwasi-emulated-signal \
		  --prefix=$BUILD/gmp-wasi-INSTALL && \
    make

# mlton binaries (for bootstrap)
WORKDIR $BUILD
RUN wget https://github.com/MLton/mlton/releases/download/on-20210117-release/mlton-20210117-1.amd64-linux-glibc2.31.tgz && \
    tar xvzf mlton-20210117-1.amd64-linux-glibc2.31.tgz && \
    cd $BUILD/mlton-20210117-1.amd64-linux-glibc2.31 && make install

# mlton at branch agoode/wasm2, which at time of writing was commit hash d2b9e5d3ea
RUN git clone -b wasm2 https://github.com/agoode/mlton mlton

# XXX move up
RUN apt-get install -y libgmp-dev

# XXX oops get rid of this ls below

# build mlton binary
RUN ls && \
    cd mlton && \
    export MLTON=$BUILD/mlton-INSTALL && \
    make all && \
    make PREFIX=$MLTON install

# XXX move up
RUN apt-get -y install curl

# install wasmtime, XXX move up
RUN curl https://wasmtime.dev/install.sh -sSf | bash
ENV PATH="/root/.wasmtime/bin:$PATH"

# XXX move this up
RUN cd $BUILD/gmp-6.3.0 && \
    make install

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

# patch the lack of existence of svnversion
RUN echo '#!/bin/bash\ngit rev-parse HEAD' > /usr/bin/svnversion && \
    chmod +x /usr/bin/svnversion

# build twelf
RUN git clone https://github.com/standardml/twelf && \
    cd twelf && \
    make mlton="$BUILD/mlton-INSTALL/bin/mlton \
        -default-ann 'nonexhaustiveMatch ignore' \
        -default-ann 'nonexhaustiveBind ignore'" \
        wasi
