/**
 * @author NahidRahman
 * @description
 * This file contains all constants that can be used throughout the app
 */

'use strict';


const
	Path = require('path');
module.exports = {
	ENV: {
		DEVELOPMENT: 'development',
		STAGING: 'staging',
		PRODUCTION: 'production'
	},
	srcPath : Path.dirname(Path.resolve(process.env.npm_package_main)),
	infoService: {
		'baseUrl': 'http://localhost:3000/api/v1/',
		'realUrl': 'http://pd-dev7.infoimageinc.com:8580' // this will be changed to single baseUrl
	},
	socketRouterPaths: [
		'/api/v1/socketTest'
	],
	errors: {
		NoPathConfig : {'error':405,'errorName':'NoPathConfig'},
		NextStepNotFound : {'error':406,'errorName':'NextStepNotFound'},
		EmptyAuthMethod : {'error':407,'errorName':'EmptyAuthMethod'},
		InvalidAuthMethodStep : {'error':408,'errorName':'InvalidAuthMethodStep'},
		InvalidStep : {'error':409,'errorName':'InvalidStep'},
		NoMethodFound : {'error':410,'errorName':'NoMethodFound'},
		StepNotFound : {'error':411,'errorName':'StepNotFound'},
		LanguageNotFoundForText : {'error':412,'errorName':'LanguageNotFoundForText'}
	},
	stringConstants: {
		Object: "Object",
		String: "String",
		Undefined: "undefined",
		Array: "Array",
		Null: "null",
	}

};
