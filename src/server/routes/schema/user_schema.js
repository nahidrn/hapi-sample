'use strict';

const joi = require('joi');

module.exports = {
	post_user: {
		FirstName: Global.JoiSchema.string_required()
			.description('First name of the user')
			.example('Luke'),
		LastName: Global.JoiSchema.string_required()
			.description('Last name of the user')
			.example('Cage'),
		IsActive: Global.JoiSchema.boolean_required()
			.valid(true, false)
			.description('Status of the user')
			.example('male'),
		Email: Global.JoiSchema.string_required()
			.description('Email Address')
			.example('test@example.com'),
		Phone: Global.JoiSchema.string_required()
			.description('Phone Number')
			.example('+8801...'),
		Scope: Global.JoiSchema.string_required()
			.valid('admin','member','all')
			.description('User Type')
			.example('male'),
		accounts: joi
			.array().optional()
			.items(
				Global.JoiSchema.string_optional()
					.description('name of account')
					.example('Loan Account')
			)
	},
	get_user: joi.object().keys({
		_id: Global.JoiSchema.number_required()
			.integer()
			.min(0)
			.description('id of the user')
			.example(1),
		FirstName: Global.JoiSchema.string_required()
			.description('First name of the user')
			.example('Luke'),
		LastName: Global.JoiSchema.string_required()
			.description('Last name of the user')
			.example('Cage'),
		IsActive: Global.JoiSchema.string_required()
			.valid(true, false)
			.description('Status of the user')
			.example('male'),
		Email: Global.JoiSchema.string_required()
			.email({ minDomainAtoms: 2 })
			.description('Email Address')
			.example('test@example.com'),
		Phone: Global.JoiSchema.string_required()
			.description('Phone Number')
			.example('+8801...'),
		Scope: Global.JoiSchema.string_required()
			.valid('admin','member','all')
			.description('User Type')
			.example('male')
	}).options({ allowUnknown: true }).label('user'),
	// Using a getter here so that I can refer to `this`, in reference to the character node of the schema object
	get get_users () {
		return joi
			.array()
			.items(this.get_user)
			.label('user')
	}
};


