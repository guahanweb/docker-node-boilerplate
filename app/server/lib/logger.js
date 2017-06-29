'use strict';

const config = require('../../config');
const winston = require('winston');
const path = require('path');
const fs = require('fs');

winston.add(winston.transports.File, {
    filename: config.log.filename,
    handleExceptions: true,
    humanReadableUnhandledException: true,
    level: config.log.level
});

if (config.env == 'development') {
    winston.cli();
}

module.exports = winston;
