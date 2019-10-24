const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const webpack = require('webpack');
const webpackStream = require('webpack-stream');

const webpackConfig = require('../../webpack.config.js')

const { config } = require('../config');

// view and check scripts
const scripts = () => {
	webpackConfig.mode = 'development'
	webpackConfig.devtool = 'eval-source-map'

	return gulp.src(config.src.jsEntry)
		.pipe(webpackStream(webpackConfig))
		.pipe(gulp.dest(config.dest.scripts));
}

const scriptsBuild = () => {
	return gulp.src(config.src.jsEntry)
		.pipe(webpackStream(webpackConfig))
		.pipe(gulp.dest(config.dest.scripts));
}

module.exports = { scripts, scriptsBuild }
