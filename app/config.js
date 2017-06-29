'use strict';

const path = require('path');
const pjson = require('./package');

module.exports = {
    pjson: pjson,
    env: getEnvironment(),
    port: process.env.PORT || 4118,
    host: process.env.HOST || 'localhost',

    path: {
        server: path.resolve(__dirname, 'server'),
        dist: path.resolve(__dirname, 'dist'),
        client: path.resolve(__dirname, 'client'),
        template: path.resolve(__dirname, 'server/templates')
    },

    log: {
        filename: path.resolve(__dirname, 'logs/' + pjson.name + '.log'),
        level: getLogLevel()
    }
};

/**
 * Normalize app environment name
 *
 * @return {string} the environment name
 */
function getEnvironment() {
    let env = process.env.NODE_ENV || 'development';
    switch (env.toLowerCase()) {
        // production
        case 'prod':
        case 'production':
            return 'production';

        // development
        case 'local':
        case 'dev':
        case 'development':
            return 'development';

        // unknown
        default:
            throw new Error('unsupported environment specified: [' + env + ']');
    }
}

function getLogLevel() {
    // add any custom logic around log level normalization
    let level = process.env.LOG_LEVEL || 'info';
    return level;
}
