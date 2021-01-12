const { Container } = require('typedi');
const postsGenerator = require('../services/postsGeneratorService');


module.exports.watch = () =>{
    Container.get('watcher')
        .on('add', path => postsGenerator.generateByPath(path))
        .on('change', path => postsGenerator.generateByPath(path))
        .on('unlink', path => postsGenerator.removeByPath(path));
}
