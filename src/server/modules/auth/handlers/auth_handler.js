/**
 * @author NahidRahman
 * @description
 * UserHandler are responsible to handle and validate the user specific request and responses.
 * UserHandler will initiate the logic impementation by calling the respective controller
 *
 */

'use strict';
const
	joi = require('joi'),
	auth = require('../../../plugins/auth'),
	services = require('../services'),
	Boom = require('boom');

const
	getTokenForUser = (request, h) => {
		//logger.info(request);
		return new Promise((resolve, reject) => {
			auth.generateToken()
				.then(data => {
					resolve(
						{'authKey': data}
					);
				});
		});
	};



module.exports = {
	getTokenForUser
};