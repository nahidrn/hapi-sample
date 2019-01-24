'use strict';

const joi = require('joi');
const schema = require('../schema/');

module.exports = {
    get_user: {
		headers: joi.object({
			authorization: Global.JoiSchema.string_required()
		}).options({ allowUnknown: true }),
		query: {
			page: Global.JoiSchema.number_optional()
				.integer()
				.min(0)
				.default(1)
				.description('page number of results')
				.example(1),
			limit: Global.JoiSchema.number_optional()
				.integer()
				.min(0)
				.default(10)
				.description('number of results to show per page')
				.example(20),
			sort: Global.JoiSchema.string_optional()
				.default("userName")
				.description('the key on which to sort results')
				.example('userName')
		}
	},
	post_user: {
		headers: joi.object({
			authorization: Global.JoiSchema.string_required()
				.description('SomeTest')
		}).options({ allowUnknown: true }),
		payload: schema.user.post_user
	}
};


