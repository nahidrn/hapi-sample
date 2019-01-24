/**
 * @author NahidRahman
 * @description
 * All calls to infoservice api will be made through here
 *
 */

'use strict';

var axios = require('axios'),
	// For some basic caching
	memoize = require('memoizee'),
	boom = require('boom');

// Build an URL for SWAPI with queries and params passed in
const _buildUrl = (path, param, query) => {
	let base = `${Global.Constants.infoService.baseUrl}${path}/`;
	if (param) {
		base += `${param}/`;
	}
	if (query) {
		const string = Object.keys(query).map((key) => `${key}=${query[key]}`);
		base += '?' + string.join('&');
	}
	return base;
};

// Fetch the URL, parse it as JSON
const get = (url, param, query) => {
	return new Promise((resolve, reject) => {
		url = _buildUrl(url, param, query);
		axios.get(url)
			.then(function (response) {
				let uigraph = response.data;
				return resolve(uigraph);

			})
			.catch(function (error) {
				logger.info(`Error : ------------------- \n ${error} \n -----------------`);
				return reject(error);
			});
	});
};

async function userAccountsApiServer(cid, extUserId, loginType, searchByVendorUsrId) {

    let url = Global.Constants.infoService.realUrl + '/infoservice/api/v1/user/' + cid + '?extUserId=' + extUserId + '&loginType=' + loginType;

    if (searchByVendorUsrId !== '' && searchByVendorUsrId !== undefined) {
        url += "&searchByVendorUsrId=" + searchByVendorUsrId;
    }

    let listOfAccounts;

    listOfAccounts = await axios.get(url, {timeout: 30000})
        .then(res => res.data)
        .catch(err => console.error(cid + " server/methods.js :: userAccountsApiServer - Response issue: ", err.response));
    return listOfAccounts;
}

module.exports = {
	get,
	userAccountsApiServer
};