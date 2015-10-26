'use strict';

// Necessary Plugins
var gulp = require('gulp'),
	paths = require('../paths'),
	plugins = require('gulp-load-plugins')(),
	browserSync = require('browser-sync');

// Compile SASS
module.exports = gulp.task('sass', function () {
	gulp.src(paths.source.sass)
		.pipe(plugins.plumber())
		.pipe(plugins.sass({errLogToConsole: true}))
		.pipe(gulp.dest(paths.build.css))
		.pipe(browserSync.stream());
})
