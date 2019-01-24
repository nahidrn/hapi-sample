/**
 * @author NahidRahman
 * @description
 * Schema are joi schema to validate payload.
 * Also handlers will intiate the logic impementation by calling the respective schema js files
 *
 */

'use strict';

const requireDirectory = require('require-directory');

// An loader for the schema, replacing the '_schema' portion of the file
module.exports = requireDirectory(module, {rename: name => name.replace('_schema','')});
