'use strict';

const Code = require('code');

module.exports = function (token, server) {

    const req = {
        method: 'GET',
        url: '/api/v1.0.0/users',
        headers: {
            authorization: token
        }
    };

    return server.inject(req).then((res) => {

        Code.expect(res.statusCode).to.equal(200);
    });
};
