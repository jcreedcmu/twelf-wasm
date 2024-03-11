# build and watch
watch:
	test -e node_modules || npm i
	node build.js watch

# build without watching
build:
	test -e node_modules || npm i
	node build.js

# run typechecker
check:
	npx tsc --watch

serve:
	cd public && python3 -m http.server

parser:
	npm run build-parser

# deploy to github pages
deploy:
	git push origin "main:deploy"

wasm: public/assets/twelf.wasm

public/assets/twelf.wasm: docker/Dockerfile
	docker build -t twelf-wasm-builder docker
	docker create --name tempcont "twelf-wasm-builder:latest"
	docker cp "tempcont:/build/twelf/bin/twelf.wasm" public/assets/twelf.wasm
	touch public/assets/twelf.wasm
	docker rm tempcont
