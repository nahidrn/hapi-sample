/**
 * @author NahidRahman
 * @description
 * Auth module
 *
 */

'use strict';

const authKey = 'hapi hapi joi joi',
	JWT = require('jsonwebtoken');

const people = {
	1: {
		id: 1,
		name: 'Anthony Valid User'
	}
};


const generateToken = async function () {
	let token = JWT.sign(people[1], authKey);
	return token;
}

const validate = function (decoded, request, h) {
	/*logger.info(" - - - - - - - decoded token:");
	logger.info(decoded);
	logger.info(" - - - - - - - request info:");
	logger.info(request.info);
	logger.info(" - - - - - - - user agent:");
	logger.info(request.headers['user-agent']);*/

	// do your checks to see if the person is valid
	if (!people[decoded.id]) {
		logger.info('False!!');
		return { isValid: false };
	}
	else {
		logger.info('True!!');
		return { isValid : true };
	}
};


// Log the bad attempt
const badAttempt = (username) => {
	logger.info(`User '${username}' was rejected access...`);
};



module.exports = {
	validate,
	generateToken
};