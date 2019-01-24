/**
 * @author NahidRahman
 * @description
 * the first entry point of the application
 * main responsibility is to initiate server start
 *
 */

'use strict';

global.Global = require('./global');
global.SetupConfig = require('./config/deployment/setup');
global.logger = require('./server/modules/logger/logger.js');


// Server configurations
const server = require('./server/server'),
	host = SetupConfig.server.host,
	port = SetupConfig.server.port;

// Start the server with the host and port specified as passed-in arguments
module.exports = server.start(host, port);
