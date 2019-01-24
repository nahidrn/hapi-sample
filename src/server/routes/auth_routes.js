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
	handlers = require('../handlers'),
	joi = require('joi'),
	validators = require('./validators'),
	Cors = require('../modules/cors'),
	schema = require('./schema');

const authRoutes = (server) => [
	{
		method: 'GET',
		path: '/api/v1/generateToken',
		config: {
			cors: Cors.options,
			auth: false,
			handler: handlers.user.getTokenForUser,
			description: 'Generate a token for user!',
			tags: ['api', 'v1', 'users']
		}
	}
];

module.exports = authRoutes;