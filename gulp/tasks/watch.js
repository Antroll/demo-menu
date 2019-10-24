const gulp =			require('gulp');
const browserSync =		require('browser-sync');

const { config } = require('../config');

const { styles } = require('./styles')
const { views } = require('./views')
const { scripts } = require('./scripts')

const watch = (cb) => {
	browserSync.init(config.browserSync);

	// watch for changes
	gulp.watch([
		'dist/scripts/**/*.js',
		'app/img/**/*'
	]).on('change', browserSync.reload);

	gulp.watch(config.src.js, gulp.series(scripts));
	gulp.watch(config.src.scss, gulp.series(styles));
	gulp.watch(config.src.pug, gulp.series(views));

	cb()
}

module.exports = { watch }
