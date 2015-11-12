'use strict';

// Necessary Plugins
var gulp = require('gulp'),
	paths = require('../paths'),
	plugins = require('gulp-load-plugins')(),
	env = require('minimist')(process.argv.slice(2));

// Compile Jade Templates
module.exports = gulp.task('jade', function () {
	return gulp.src(paths.source.jade)
		.pipe(plugins.plumber())
	  .pipe(plugins.jade({pretty: !env.p}))
		.pipe(gulp.dest(paths.build.html))
});
