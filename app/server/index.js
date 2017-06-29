'use strict';

const config = require('../config');
const Promise = require('bluebird');
const Hapi = require('hapi');
const path = require('path');
const logger = require('./lib/logger');

const plugins = require('./plugins');
const routes = require('./routes');

// if you have any custom auth
// const scheme = require('./auth/scheme');

function appStart(opts) {
    return new Promise((resolve, reject) => {
        let server = new Hapi.Server();
        server.connection({
            port: opts.port,
            host: opts.host,
            routes: {
                files: {
                    relativeTo: config.path.dist
                }
            }
        });

        // register all plugins
        server.register(plugins, err => {
            if (err) return reject(err);

            // configure view compilation
            server.views({
                engines: { pug: require('pug') },
                path: config.path.template,
                compileOptions: {
                    pretty: true
                }
            });

            // apply all routes
            server.route(routes);

            resolve(server);
        });
    });
}

// if this file is called directly, start up the server.
// otherwise, we export (facilitates much easier testing)
if (require.main === module) {
    appStart({
        port: config.port,
        host: config.host
    }).then(server => {
        server.start(() => {
            logger.info(`running at ${server.info.uri}`);
        });
    }, err => {
        throw err;
    });
}

module.exports = appStart;
