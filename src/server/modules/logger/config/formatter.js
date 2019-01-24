'use strict';

const Format = require('date-fns/format');
const { format, createLogger, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format;

/*module.exports = function formatter(options) {
    const ts = options.timestamp ? Format(Date.now(), 'YYYY-MM-DD hh:mm:ss.SSS') : null;
    const message = options.message || 'message: ' + options.meta.message + ', stack: ' + options.meta.stack;
    return ts ? ts + ', [' + options.level.toUpperCase() + '] ' + message : '[' + options.level.toUpperCase() + '] ' + message;
};*/
module.exports = {
	format: combine(
		timestamp(),
		prettyPrint()
	)
};

