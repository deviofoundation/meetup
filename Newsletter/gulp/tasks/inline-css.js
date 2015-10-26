'use strict';

// Necessary Plugins
var gulp = require('gulp'),
	paths = require('../paths'),
	plugins = require('gulp-load-plugins')(),
	env = require('minimist')(process.argv.slice(2));

// Inject Inline css
module.exports = gulp.task('inline-css', function () {
	return gulp.src('www/*html')
		.pipe(plugins.inlineCss({
			applyStyleTags: true,
			applyLinkTags: true,
			removeStyleTags: true,
			removeLinkTags: true
		}))
		.pipe(gulp.dest('build/'));
});
