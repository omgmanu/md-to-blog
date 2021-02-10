# Markdown to Blog

### This project is a simple blog created from Markdown files. It watches the files for changes, deletes and for newly created md files.


## Installation

1. Install dependencies.
```
npm install
```
2. Create an ```.env``` file at the project root and use contents from the ```.env.example``` to populate it.
3. Run the app
```
npm start 
```
4. View it at ```http://localhost:3002``` 

## Usage

Populate the ```/posts``` folder with ```.md``` files that contains valid [Markdown syntax](https://www.markdownguide.org/basic-syntax)

## Tools used

- MD to HTML: [showdown](https://github.com/showdownjs/showdown) 
- cache: [node-cache](https://www.npmjs.com/package/node-cache)
- file watcher: [chokidar](https://github.com/paulmillr/chokidar)
- template engine: [ejs](https://ejs.co)
- DI tool: [typedi](https://github.com/typestack/typedi)
