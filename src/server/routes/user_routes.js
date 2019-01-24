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
	boom = require('boom'),
	handlers = require('../handlers'),
	joi = require('joi'),
	validators = require('./validators'),
	Cors = require('../modules/cors'),
	schema = require('./schema');

const userRoutes = (server) => [

	{
		method: 'GET',
		path: '/api/v1/users',
		config: {
			auth: 'jwt',
			handler: handlers.user.getUsers,
			description: 'This endpoint will get all the users!',
			tags: ['api', 'v1', 'users'],
			validate: validators.user.get_user
			/*response: {
				schema: schema.user.get_user
			}*/
		}
	},
	{
		method: 'POST',
		path: '/api/v1/users',
		config: {
			auth: 'jwt',
			handler: handlers.user.postUser,
			description: 'This endpoint will post an user!',
			tags: ['api', 'v1', 'users'],
			validate: validators.user.post_user
			/*response: {
				schema: schema.user.get_user
			}*/
		}
	},
	{
		method: 'GET',
		path: '/api/v1/user/{userName}',
		config: {
			handler: handlers.user.getUserInfo,
			description: 'This endpoint will get the user information!',
			tags: ['api', 'v1', 'users'],
			validate: {
				headers: joi.object({
					authorization: joi
						.string()
						.required()
				}).options({ allowUnknown: true }),
				params: {
					userName: joi
						.string()
						.required()
						.description('the user name needs to be specified')
						.example('someString')
				}
			}
			/*response: {
				schema: schema.user.get_user
			}*/
		}
	}
];

module.exports = userRoutes;