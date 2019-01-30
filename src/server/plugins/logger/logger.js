'use strict';

const winston = require('winston');
const transports = [];
const loggerTypes = SetupConfig.logger.types || ['console'];

for (const type of loggerTypes) {
    transports.push(require('./config/transport-' + type));
}
const logger = winston.createLogger({
	transports:transports
});
module.exports = logger;

