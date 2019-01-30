/**
 * @author NahidRahman
 * @description
 * All routes will be registered during the server run through server.js
 * Joi will be used to validate the request/response
 * Respective handlers will be automatically called when an api is called
 *
 */

'use strict';
const
	handlers = require('../handlers/index'),
	joi = require('joi'),
	validators = require('./validators/index'),
	schema = require('./schema/index');

const userRoutes = (server) => [
	{
		method: 'GET',
		path: '/',
		config: {
			auth: false,
			handler: handlers.test.landingMessage,
			description: 'Just to avoid 404 on landing!',
			tags: ['api', 'v1', 'users']
		}
	},
	{
		method: 'GET',
		path: '/api/v1/socketTest',
		config: {
			auth: false,
			handler: handlers.test.socketTesting(server),
			description: 'Testing on the socket!',
			tags: ['api', 'v1', 'users', "socket"]
		}
	}
];

module.exports = userRoutes;