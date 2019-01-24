/**
 * @author NahidRahman
 * @description
 * Implementation of Socket routing plugin through NES
 *
 */

'use strict';

// See: https://github.com/hapijs/nes

const Hoek = require('hoek');

module.exports = (server) => {
	// List of socket paths
	const socketRoutes = Global.Constants.socketRouterPaths;

	// Register each socket path as a subscription-able path (for Nes)
	socketRoutes.forEach(path => {
		server.subscription(path);
		logger.info(`Registered subscription for path ${path}`)
	});
};