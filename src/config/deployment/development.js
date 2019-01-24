'use strict';

const Pack = require(Global.Constants.srcPath + '/../package.json');

module.exports = {
  server: {
    host: "10.0.0.223",
    port: 3000,
    authTokenExpirationTime: "15m"
  },
  logger: {
    types: ["console","rotate-file"],
    level: "debug"
  },
  documentation: {
	  documentationPage: true,
	  documentationPath: '/swagger',
	  documentationRouteTags: 'no-logging',
	  swaggerUIPath: '/ui/',
	  basePath: '/api/',
	  pathPrefixSize: 2,
	  pathReplacements: [{
		  // Replace the version in all paths
		  replaceIn: 'groups',
		  pattern: /v([0-9]+)\//,
		  replacement: ''
	  },{
		  // This allows grouping to include plural forms of the noun to be grouped with their singular counter-part (ie `characters` in the group `character`)
		  replaceIn: 'groups',
		  pattern: /s$/,
		  replacement: ''
	  }],
	  info: {
		  title: 'InfoREACH - Service',
		  description: `
			This API is to serve acct, user and statement info.
				`,
		  version: Pack.version,
		  termsOfService: 'https://github.com/glennjones/hapi-swagger/',
		  license: {
			  name: Pack.license
		  }
	  },
	  tags: [
		  {
			  name: 'users',
			  description: 'working with users',
			  externalDocs: {
				  description: 'Find out more',
				  url: 'http://example.org'
			  }
		  },
		  {
			  name: 'accounts',
			  description: 'working with accounts',
			  externalDocs: {
				  description: 'Find out more',
				  url: 'http://example.org'
			  }
		  },
		  {
			  name: 'uigraph',
			  description: 'working with uigraphs',
			  externalDocs: {
				  description: 'Find out more',
				  url: 'http://example.orga'
			  }
		  }
	  ],
	  jsonEditor: true,
	  validatorUrl: null
  },
  db: {
    uri: "mongodb://localhost:27017/offerMgmt",
    options: {
    	useMongoClient: true,
      	poolSize: 10,
      	bufferMaxEntries: 0
    }
  }
};