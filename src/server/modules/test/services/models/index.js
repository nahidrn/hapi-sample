/**
 * @author NahidRahman
 * @description
 * mongoose models
 */

'use strict';

const requireDirectory = require('require-directory');

// An loader for the controllers, replacing the '_controller' portion of the file
module.exports = requireDirectory(module, {rename: name => name.replace('_model','')});
