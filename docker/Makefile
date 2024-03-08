../public/assets/twelf.wasm: Dockerfile
	docker build -t twelf-wasm-builder .
	docker create --name tempcont "twelf-wasm-builder:latest"
	docker cp "tempcont:/build/twelf/bin/twelf.wasm" ../public/assets/twelf.wasm
	docker rm tempcont
