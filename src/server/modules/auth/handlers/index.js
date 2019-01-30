/**
 * @author NahidRahman
 * @description
 * Handlers are responsible to handle and validate the request and responses.
 * Also handlers will intiate the logic impementation by calling the respective controlllers
 *
 */

'use strict';

const requireDirectory = require('require-directory');

// An loader for the handlers, replacing the '_handler' portion of the file
module.exports = requireDirectory(module, {rename: name => name.replace('_handler','')});
