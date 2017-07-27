install:
	yarn install

build: install
	node_modules/.bin/babel index.js -d dist