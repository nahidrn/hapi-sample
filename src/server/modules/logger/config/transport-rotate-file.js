'use strict';

const Formatter = require('./formatter');
const Winston = require('winston');

const logLevel = SetupConfig.logger.level || 'debug';
const srcPath = Global.Constants.srcPath;

require('winston-daily-rotate-file');
module.exports =  new (Winston.transports.DailyRotateFile)({
    level: logLevel,
    filename: srcPath+'/logs/backend-api-log/',
    datePattern: 'YYYY-MMM-DD',
    prepend: true,
    timestamp: true,
    json: false,
    maxDays: 10,
    maxFiles: 8,
    maxsize: 10485760,
    format: Formatter.format
});

