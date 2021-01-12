const expressLoader = require('./express');
const dependencyInjectorLoader = require('./dependencyInjector');
const postsGenerator = require('../services/postsGeneratorService');
const watcher = require('../services/watcherService');
const { Container } = require('typedi');

exports.init = async ({ expressApp }) => {
    await dependencyInjectorLoader();
    Container.get('logger').info('✌️ Dependency Injector loaded');

    await expressLoader({ app: expressApp });
    Container.get('logger').info('✌️ Express loaded');

    // const totalPosts = await postsGenerator.generateAll();
    // Container.get('logger').info(`✌️ ${totalPosts} posts generated`);

    watcher.watch();
    Container.get('logger').info(`✌️ Watcher started`);
};
