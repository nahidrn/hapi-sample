/**
 * @author NahidRahman
 * @description
 * This file contains all helper/util functions that can be used throughout the app
 */

'use strict';
const Utils = require('utils')._;
module.exports = {
	convertCriteriaToLikeType: function (criteria, selection) {

		for (const field in criteria) {
			if (this.arrayContains(Utils.arrayify(selection), field)) {
				continue;
			}
			criteria[field] = this.convertElementToLikeElement(criteria[field]);
		}
		return criteria;
	},
	convertElementToLikeElement: function (element) {

		if (element === '*') {
			return '';
		}
		return new RegExp('^' + element);
	},
	arrayContains: function (array, element) {

		return (array.indexOf(element) > -1);
	},
	getTotal: function () {

		return SetupConfig.app.PerMonthInstallment * this.monthDiff(new Date(SetupConfig.app.AccountStartDate), new Date());
	},
	monthDiff: function (d1, d2) {

		let months = (d2.getFullYear() - d1.getFullYear()) * 12;
		months += d2.getMonth() - d1.getMonth();
		return months;
	},
	 variableType: function(object) {
		let stringConstructor = "test".constructor;
		let arrayConstructor = [].constructor;
		let objectConstructor = {}.constructor;
		if (object === null) {
			return "null";
		}
		else if (object === undefined) {
			return "undefined";
		}
		else if (object.constructor === stringConstructor) {
			return "String";
		}
		else if (object.constructor === arrayConstructor) {
			return "Array";
		}
		else if (object.constructor === objectConstructor) {
			return "Object";
		}
		else {
			return false;
		}
	}
};
