'use strict';

const nconf = require('nconf');
const request = require('request');
const logger = require('./logger');
const authenticate = require('./authenticate');

// Read the config.
nconf
  .file({ file: './config.json' })
  .argv()
  .env();

const monitor = function() {
  authenticate(function(err, token) {
    if (err) {
      logger.error('Error authenticating:', err.message);
      return setTimeout(monitor, 30000);
    }

    var monitorUrl = `https://${nconf.get('AUTH0_DOMAIN')}/api/connections/${nconf.get('AUTH0_CONNECTION')}/socket`;
    logger.debug(' > Calling:', monitorUrl);

    request.get({ url:  monitorUrl, headers: { 'Authorization': `Bearer ${token}`} }, function (err, resp, body) {
      if (err) logger.warning('Error calling the monitoring endpoint.');
      else if (resp.statusCode === 404) logger.error('The connector is offline.');
      else if (resp.statusCode === 200) logger.info('The connector is online.');
      else logger.warning('Unexpected status code:', resp.statusCode);

      next();
    });
  });
};

const next = function() {
  setTimeout(monitor, 5000);
}

// Start.
logger.info('Monitoring', nconf.get('AUTH0_DOMAIN'), 'on', nconf.get('AUTH0_CONNECTION'), 'every 30 sec.');
monitor();
