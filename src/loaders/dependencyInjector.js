const { Container } = require('typedi');
const LoggerInstance = require('./logger');
const ConverterInstance = require('./converter');
const CacheInstance = require('./cache');
const WatcherInstance = require('./watcher');

module.exports = () => {
    try {
        Container.set('converter', ConverterInstance);
        Container.set('cache', CacheInstance);
        Container.set('watcher', WatcherInstance('../../posts'));
        Container.set('logger', LoggerInstance);
    } catch (e) {
        LoggerInstance.error('🔥 Error on dependency injector loader: %o', e);
        throw e;
    }
};
