
// Necessary Plugins
var gulp = require('gulp'),
	runSequence = require('run-sequence').use(gulp);

// Complie all project and run inline-css
module.exports = gulp.task('prepare', ['sass', 'jade', 'csso', 'autoprefixer']);

module.exports = gulp.task('build', function (callback) {
	runSequence('prepare', 'inline-css');
});
