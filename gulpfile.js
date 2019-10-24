'use strict';
const gulp = require('gulp');

const { styles } = require('./gulp/tasks/styles')
const { views } = require('./gulp/tasks/views')
const { scripts, scriptsBuild } = require('./gulp/tasks/scripts')
const { watch } = require('./gulp/tasks/watch');

const serve = gulp.series(
	// views,
	styles,
	scripts,
	watch
);

const build = gulp.series(
	views,
	styles,
	scriptsBuild,
);

exports.styles = styles
exports.views = views
exports.scripts = scripts
exports.scriptsBuild = scriptsBuild

exports.default = exports.serve = serve
exports.build = build
