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
	landingMessage = (request, h) => {
		return 'welcome to InfoReach-Service!';
	},
	socketTesting = (server) => (request, reply) => {
		let data='something something something'
		server.publish('/api/v1/socketTest', data);
		return data;
	};



module.exports = {
	landingMessage,
	socketTesting
};