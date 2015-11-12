'use strict';

// Necessary Plugins
var gulp = require('gulp'),
	paths = require('../paths'),
	browserSync = require('browser-sync');

// Serve files from /www/
module.exports = gulp.task('browser-sync', function () {

	var files = [
		paths.browserSync.html,
		paths.browserSync.css,
		paths.browserSync.img
	];

	browserSync.init(files, {
		notify: false,
		injectChanges: true,
		server: {
			baseDir: paths.build.html,
		}
	});
});
