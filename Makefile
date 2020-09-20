install:
	npm install

build: install
	node_modules/.bin/babel index.js -d dist

publish:
	npm version patch
	npm publish