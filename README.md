Twelf on Wasm
=============

[Twelf](http://twelf.org/wiki/Main_Page) is an implementation, in
[Standard ML](https://en.wikipedia.org/wiki/Standard_ML), of a logical
framework based on the type theory LF.

Inspired by [Twelf Live](https://twelf-live.onrender.com), and thanks
to [this PR](https://github.com/MLton/mlton/pull/550) against the
MLton compiler, which adds a cross-compilation target for Wasm/WASI,
you can now run twelf inside your browser.

Demo
====

[Go here to interact with the twelf server](https://jcreedcmu.github.io/twelf-wasm).

Building for Local Development
==============================

From a fresh checkout, you can do
```shell
npm install
make build
make serve
```
to serve locally on port 8000.

Alternatively the default build target
```
make
```
runs a watch process, continually rebuilding javascript from typescript source.

Other make targets
------------------
```shell
make parser
```
rebuilds the syntax-highlighting parser from its [lezer](https://lezer.codemirror.net/) source.
This artefact is checked into the repository since it changes rarely, and you do not need to rebuilt it.

```shell
make wasm
```
rebuilds the `twelf.wasm` asset in docker. This artefact is also checked into the repository,
and it similarly does not need to be built from a fresh checkout.
