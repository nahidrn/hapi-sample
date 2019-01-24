'use strict';

const DEPOLOYMENT_ENV = process.env.DEPOLOYMENT_ENV || Global.Constants.DEVELOPMENT;

module.exports = function () {
    return require('./' + DEPOLOYMENT_ENV + '.js');
}();
