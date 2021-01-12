const chokidar = require('chokidar');
const path = require('path');

const watcher = (directory) => {
    return chokidar.watch(`${path.join(__dirname, directory)}/**/*.md`, {
        persistent: true
    });
}

module.exports = watcher;
