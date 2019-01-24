/**
 * @author NahidRahman
 * @description
 * Implementation of hapi-swagger plugin
 *
 */

'use strict';

// See: https://github.com/glennjones/hapi-swagger

const HapiSwagger = require('hapi-swagger');
const swaggerOptions = SetupConfig.documentation;

module.exports = {
	plugin: HapiSwagger,
	options: swaggerOptions
};
