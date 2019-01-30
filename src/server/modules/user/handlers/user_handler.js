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
	postUser = (request, h) => {
		return new Promise((resolve, reject) => {
			logger.info(request.payload);
			services.user.post(request.payload)
				.then((user) => {

					logger.info(`user:handlers: Created new user info`);
					resolve( h.response(user)
						.type('application/json')
						.header('authorization', request.headers.authorization));
				})
				.catch((err) => {
					logger.error(`user:handlers: error while fetching userinfo ${err}`);
					resolve(Boom.boomify(err, { statusCode: 420 }));
				});
		});
	},
	getUsers = (request, h) => {
		return new Promise((resolve, reject) => {
			services.user.getList(request.query)
				.then((users) => {

					logger.info(`user:handlers: Returned ${users.length} users`);
					if (users.length != 0) {
						resolve(h.response(users)
							.type('application/json')
							.header('authorization', request.headers.authorization));
					} else {
						var error = new Error('No users found');
						throw Boom.boomify(error, {statusCode: 420});
					}
				})
				.catch((err) => {

					logger.error(`${err}`);
					resolve(err);
				});
		});
	},
	getUserInfo = (request, h) => {
		return new Promise((resolve, reject) => {
			let {userName} = request.params;
			services.user.getByUsername(userName)
				.then((user) => {
					if (user !== '' && user !== undefined && user !== null) {
						logger.info(`user:handlers: Returned ${user.length} users`);
						if (user.length != 0) {
							resolve(h.response(user)
								.type('application/json')
								.header('authorization', request.headers.authorization));
						}
					} else {
						var error = new Error('No users found');
						throw Boom.boomify(error, {statusCode: 420});
					}
				})
				.catch((err) => {

					logger.error(`${err}`);
					resolve(err);
				});
		});

	};



module.exports = {
	postUser,
	getUsers,
	getUserInfo
};