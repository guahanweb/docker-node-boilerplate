'use strict';

const fs = require('fs');
const path = require('path');

// auto-load plugin
let plugins = [];
fs.readdirSync(__dirname)
    .filter(file => file !== path.basename(__filename))
    .forEach(file => {
        let plugin = require(path.join(__dirname, file));
        if (plugin instanceof Array) {
            plugins = plugins.concat(plugin);
        } else {
            plugins.push(plugin);
        }
    });

// add static, application required plugins here
module.exports = plugins.concat([
    require('inert'),
    require('vision')
]);
