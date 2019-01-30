// language=ECMAScript 6
/**
 * @author NahidRahman
 * @description
 * CORS module
 *
 */

'use strict';

// See: https://github.com/gabaroar/hapi-cors

module.exports = {
	options: {
		// Allow consumption by any host
		origin: ['*'],
		// Allows authentication to be sent by default
		credentials: true,
		// These headers can be consumed
		exposedHeaders: ['content-type', 'content-length', 'api-version'],
		// For caching
		maxAge: 600,
		// These request headers can be sent
		headers: ['Accept', 'Content-Type', 'Authorization', 'api-version']
	}
};

