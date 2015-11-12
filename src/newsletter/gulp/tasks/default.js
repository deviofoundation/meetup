'use strict';

var gulp = require('gulp');

// Default task
module.exports = gulp.task('default', ['sass', 'jade', 'watch','browser-sync']);
