// language=ECMAScript 6
/**
 * @author NahidRahman
 * @description
 * LDAP module
 *
 */

'use strict';

const ldap = require('ldapjs');
let LDAP = {};
LDAP.ldap = ldap;
LDAP.serverIP = SetupConfig.ldap.LDAP_SERVER_HOST_IP;
LDAP.serverPort = SetupConfig.ldap.LDAP_SERVER_PORT;
LDAP.bindDN = SetupConfig.ldap.LDAP_SERVER_BIND_DN;
LDAP.bindPassword = SetupConfig.ldap.LDAP_SERVER_ROOT_PASSWORD;
LDAP.searchOU = SetupConfig.ldap.LDAP_SERVER_SEARCH_ROOT_OU;
LDAP.client = createClient();
LDAP.client.bind(LDAP.bindDN, LDAP.bindPassword, function (err) {
	if (err) {
		console.log("CLIENT: LDAP Connection failed.");
	}else{
		console.log("CLIENT: LDAP Connection is running.......");
	}
});

var user = {};


function createClient() {
	return ldap.createClient({
		url: 'ldap://' + LDAP.serverIP + ':' + LDAP.serverPort
	});
}

/*
 * $ ldapsearch -H ldap://localhost:389 -x -b "dc=test,dc=com" -D "cn=user one,ou=users,dc=test,dc=com" -W "(&(objectClass=inetOrgPerson)(uid=uone))"

 ldapsearch -LLL -H ldap://localhost:389 -x -b "dc=test,dc=com" "(&(objectClass=inetOrgPerson)(uid=uone))" ou


 ldapsearch -LLL -H ldap://localhost:389 -x -b "dc=test,dc=com" "(&(objectClass=inetOrgPerson)(uid=uone))" sn givenName mail uid
 ldapsearch -LLL -H ldap://localhost:389 -x -b "dc=test,dc=com" "(&(objectClass=*)(uid=uone))" dn cn

 * */
/*
LDAP.checkAccount = function (options, callBackFn) {
	console.log("************** LDAP.checkAccount ****************");
//console.log("LDAP Auth:options:"+JSON.stringify(options));
	options = options || {};
	var future = new Future;
	try {
		if (options.hasOwnProperty('userId') && options.hasOwnProperty('password')) {
			LDAP.opts = {
				scope: "sub",
				filter: "(&(objectClass=user)(cn=" + options.userId + "))",
				attrsOnly: true
			};
			var userObject = {};
			LDAP.client.search(LDAP.searchOU, LDAP.opts, function (err, res) {
				res.on('searchEntry', function (entry) {
					userObject = entry.object;
				});

				res.on('searchReference', function (referral) {
					console.log('referral: ' + referral.uris.join());
				});

				res.on('error', function (err) {
					console.error('error: ' + err.message);
					future.return(false);
				});

				res.on('end', function (result) {
					var loginClient = createClient();
					if(userObject.dn !== undefined){
						loginClient.bind(userObject.dn, options.password, function (err) {
							if (!err) {
								future.return(userObject);
							} else {
								future.return(false);
							}
						});
					}else{
						future.return(false);
					}
				});
			});
		}
		else {
			future.return(false);
		}
	} catch (err) {
		future.return(false);
	}
	return future.wait();
};*/

module.exports = LDAP;

