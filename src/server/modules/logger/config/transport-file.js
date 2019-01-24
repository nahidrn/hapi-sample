'use strict';

const Formatter = require('./formatter');
const Winston = require('winston');

const logLevel = SetupConfig.logger.level || 'debug';
const srcPath = Global.Constants.srcPath;

module.exports = new (Winston.transports.File)({
    level: logLevel,
    timestamp: true,
    filename: srcPath+"/logs/backend-api.log",
    json: false,
	format: Formatter.format
});
