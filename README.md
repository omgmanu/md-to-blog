# Markdown to Blog

### This project is a simple blog created from Markdown files. It watches the files for changes, deletes and for newly created md files.

####Demo: <a href="http://md-to-blog.manu.win" target="_blank">Here </a>

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

##Usage

Populate the ```/posts``` folder with ```.md``` files that contains valid <a href="https://www.markdownguide.org/basic-syntax/" target="_blank">Markdown syntax</a>

##Tools used

- MD to HTML: <a href="https://github.com/showdownjs/showdown" target="_blank">showdown</a> 
- cache: <a href="https://www.npmjs.com/package/node-cache" target="_blank">node-cache</a>
- file watcher: <a href="https://github.com/paulmillr/chokidar" target="_blank">chokidar</a>
- template engine: <a href="https://ejs.co" target="_blank">ejs</a>
- DI tool: <a href="https://github.com/typestack/typedi" target="_blank">typedi</a>
