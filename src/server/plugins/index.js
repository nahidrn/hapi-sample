/**
 * @author NahidRahman
 * @description
 * Modules declared below will be registered during server start
 *
 */

'use strict';

const
	Swagger = require('./swagger'),
	Inert = require('inert'),
	Vision = require('vision'),
	Good = require('./good'),
	Blipp = { plugin: require('blipp'), options: { showAuth: true } },
	Auth = require('hapi-auth-jwt2'),
	Nes = require('nes');

module.exports = [Swagger, Inert, Vision, Good, Blipp, Auth, Nes];