'use strict';

// Necessary Plugins
var gulp = require('gulp'),
	paths = require('../paths'),
	plugins = require('gulp-load-plugins')();

// Compile alto prefix for browser
module.exports = gulp.task('autoprefixer', function () {
	return gulp.src('www/style/style.css')
		.pipe(plugins.plumber())
		.pipe(plugins.autoprefixer('last 1 Chrome version', 'last 3 iOS versions', 'last 3 Android versions'))
		.pipe(gulp.dest(paths.build.css))
});
