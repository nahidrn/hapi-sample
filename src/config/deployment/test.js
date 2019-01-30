'use strict';

module.exports = {
	server: {
		host: "localhost",
		port: 3000,
		authTokenExpirationTime: "15m"
	},
	logger: {
		types: ["console"],
		level: "debug"
	},
	documentation: {
		documentationPage: false
	},
	modules: ["auth", "test", "user"],
	db: {
		uri: "mongodb://localhost:27017/offerMgmt",
		options: {
			useNewUrlParser: true,
			poolSize: 10,
			bufferMaxEntries: 0
		}
	}
};