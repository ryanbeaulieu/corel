'use strict';

var requireDir = require('require-dir');

/* Require all tasks in ./tasks/gulp, including subfolders */
requireDir('./tasks', { recurse: true });