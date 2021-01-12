const dotenv = require('dotenv');
const appConstants = require('./constants');
const envFound = dotenv.config();

if (envFound.error) {
    throw new Error("🔥️  Couldn't find .env file!");
}

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    port: parseInt(process.env.PORT, 10),
    constants: appConstants,
    logs: {
        level: process.env.LOG_LEVEL || 'silly',
    },
};
