// language=ECMAScript 6
/**
 * @author NahidRahman
 * @description
 * Good will log every api called in the console
 *
 */

'use strict';

// See: https://github.com/hapijs/good

module.exports = {
	plugin: require('good'),
	options: {
		reporters: {
			console: [{
				module: 'good-squeeze',
				name: 'Squeeze',
				args: [{
					// Log everything
					log: '*',
					// Only log out responses tagged with `api` (prevents response logs for swagger assets)
					response: ['api', 'ops']
				}]
			},{
				module: 'good-console'
			}, 'stdout']
		}
	}
};

