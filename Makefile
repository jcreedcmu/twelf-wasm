# build and watch
watch:
	test -e node_modules || npm i
	node build.js watch

# build without watching
build:
	test -e node_modules || npm i
	node build.js

serve:
	python3 -m http.server

parser:
	npm run build-parser
