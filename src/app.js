const config = require('./config');
const express = require('express');
const Logger = require('./loaders/logger');

async function startServer() {
    const app = express();

    await require('./loaders').init({ expressApp: app });

    app.listen(config.port, (err) => {
        if (err) {
            Logger.error(err);
            process.exit(1);
        }

        Logger.info(`✌  Server listening on port: ${config.port}`);
    });
}

startServer();
