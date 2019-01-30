/**
 * @author NahidRahman
 * @description
 * Server.js is responsible to register the plugins, initializing routes and default auth strategies
 * and then run the server
 *
 */

'use strict';

const Hapi = require("hapi"),
	routes = require('./routes'),
	plugins = require('./plugins/index'),
	subscriptions = require('./plugins/subscriptions'),
	authValidation = require('./plugins/auth').validate,
	Mongoose = require('mongoose');

global.LDAP = require('./plugins/ldap/auth');


const start = (host, port) => {

	return new Promise((resolve, reject) => {

		const server = new Hapi.Server({
			host: host,
			port: port,
			routes: {cors: true}
		});

		const init = async () => {
			//connecting to db
			const dbOptions = SetupConfig.db.options;
			dbOptions.promiseLibrary = global.Promise;
			Mongoose.connect(
				SetupConfig.db.uri,
				dbOptions
			).then(() => {

				logger.info('Connected with db successfully.');
			}).catch((err) => {

				logger.error(`Error while connecting with db: ${err}`);
			});

			await server.register(plugins);

			server.auth.strategy('jwt', 'jwt',{
				key: 'hapi hapi joi joi',          // Never Share your secret key
				validate: authValidation,
				verifyOptions: { algorithms: [ 'HS256' ] } // pick a strong algorithm
			});
			server.auth.default('jwt');

			// Initializing Routes
			await server.route(routes(server));
			await server.start();
			logger.info('Server running at: '+host+':'+port);
			subscriptions(server);
		};

		process.on('unhandledRejection', (err) => {

			console.log(err);
			process.exit(1);
		});


		init();

		resolve();
	});
};

module.exports = {
	start
};
