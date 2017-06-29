'use strict';

const fs = require('fs');
const path = require('path');

let routes = [];
fs.readdirSync(__dirname)
    .filter(file => file !== path.basename(__filename))
    .forEach(file => {
        let route = require(path.join(__dirname, file));
        if (route instanceof Array) {
            routes = routes.concat(route);
        } else {
            routes.push(route);
        }
    });

// add default static route handling
routes.push({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: '.',
            redirectToSlash: true,
            index: true
        }
    }
});

module.exports = routes;
