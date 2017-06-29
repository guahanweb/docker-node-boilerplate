'use strict';

const config = require('../../config');

module.exports = {
    register: require('hapi-and-healthy'),
    options: {
        env: config.env,
        name: config.pjson.name,
        version: config.pjson.version
    }
};
