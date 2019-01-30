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
	available_modules = SetupConfig.modules;

function get_routes_for_modules (server) {
	let publishable_routes = []
	available_modules.forEach(function(module_name) {
		let router_item = require('./modules/'+module_name+'/routes')(server);
		publishable_routes = [].concat.apply([], [publishable_routes, router_item]);
	});
	return publishable_routes;
}


const routes = (server) => get_routes_for_modules(server);


module.exports = routes;