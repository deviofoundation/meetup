'use strict';

module.exports = {

	source: {
		sass: './src/style/**/*.scss',
		jade: './src/**/*.jade',
		img: './src/img/**/*.{jpg,png,gif}'
	},

	browserSync: {
		img: 'www/img/**/*',
		html: 'www/**/*.html',
		css: 'www/css/**/*.css'
	},

	build: {
		js: './www/js',
		html: './www/',
		css: './www/css',
		img: './www/img'
	}

};
