'use strict';

const winston = require('winston');

// Initialize logger.
console.log('\r\n');
module.exports = new winston.Logger({
    transports: [
        new winston.transports.Console({
            timestamp: true,
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});
