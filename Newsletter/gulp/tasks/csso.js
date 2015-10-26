'use strict';

// Necessary Plugins
var gulp = require('gulp'),
	paths = require('../paths'),
	plugins = require('gulp-load-plugins')();
	
//  Optimize Css
module.exports = gulp.task('csso', function () {
	return gulp.src('www/css/style.css')
		.pipe(plugins.plumber())
		.pipe(plugins.csso())
		.pipe(gulp.dest(paths.build.css));
});
