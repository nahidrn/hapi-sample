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
	userRoutes = require('./user_routes');

/*

ROUTES NOTES:

Tags:
	- Use the 'api' tag to have routes show up in the swagger-ui view
	- Use the 'socket' tag to register that route as a `Nes` socket subscription

Auth:
	- Authentication has been enabled by default to all routes, unless specified otherwise with an `auth` node of the `config` for the route (ie `auth: false`)

Validation:
	- Use the validation to validate the incoming request's query, params, and payload

Response Schema:
	- Validates the outgoing response, making sure it contains all of the appropriate object keys and types

Versions:
	- Include the version in the path, and the module hapi-api-version should take care of the rest

*/

// Passing in server, mostly to deal with server.publish in the different handlers

const routes = (server) =>
	[].concat.apply([], [userRoutes(server)]);


module.exports = routes;