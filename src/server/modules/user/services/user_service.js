/**
 * @author NahidRahman
 * @description
 * User Controllers will be responsible to imply user specific customized logics
 */


'use strict';

const model = require('./models/');
const user = model.user;
const UserScope = {
	ADMIN: 'admin',
	MEMBER: 'member',
	ALL: [this.ADMIN, this.MEMBER]
};

module.exports = {
	getList: function (criteria) {
		logger.info(criteria);
		return new Promise((resolve, reject) => {
			var perPage = criteria.limit
				, page = criteria.page - 1, res = {};

			user.find()
				.skip(perPage * page)
				.limit(perPage)
				.sort({
					FirstName: 'asc'
				})
				.exec(function(err, users) {
					user.count().exec(function(err, count) {
						res = {
							users: users,
							count: count,
							page: page,
							pages: Math.ceil(count / perPage)
						};
						resolve(res);
					})
				})
		});


		//return user.find();
		//return user.find(Global.Helpers.convertCriteriaToLikeType(criteria, ['IsActive']));
	},
	get: function (userId) {

		return new Promise((resolve, reject) => {
			user.findById(userId)
				.exec(function(err, user) {
					resolve(user);
				})
		});
	},
	post: function (userInfo) {

		//userInfo.CurrentDueAmount = Global.Helpers.getTotal();
		return new Promise((resolve, reject) => {

			new user(userInfo).save()
				.exec(function(err, user) {
					resolve(user);
				})
		});
	},
	patch: function (userId, userInfo) {

		return new Promise((resolve, reject) => {

			user.findByIdAndUpdate(
				userId, userInfo,
				{new: true, runValidators: true})
					.exec(function(err, user) {
						resolve(user);
					})
		});
	},
	delete: function (userId) {

		return new Promise((resolve, reject) => {

			user.findByIdAndRemove({_id: userId})
				.exec(function(err, user) {
					resolve(user);
				})
		});
	},
	getByUsername: function (username) {
		return new Promise((resolve, reject) => {

			user.findOne({FirstName: username})
				.exec(function(err, user) {
					resolve(user);
				})
		});
	}
};
