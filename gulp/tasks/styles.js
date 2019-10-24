const gulp =			require('gulp');
const $ =				require('gulp-load-plugins')();
const browserSync =		require('browser-sync');
const autoprefixer =	require('autoprefixer');
$.sass.compiler =		require('node-sass');

const { config } =		require('../config');

const styles = () => {
	const plugins = [autoprefixer()];
	return gulp.src(config.src.scss)
		.pipe($.plumber({errorHandler: config.errorHandler }))

		.pipe($.changed(config.dest.styles), {extension: '.css'})

		.pipe($.if(browserSync.active, $.cached('scss')))

		.pipe($.sassInheritance({ dir: config.src.styles, extension: '.scss', skip:'node_modules' }))

		.pipe($.filter(function (file) {
			return !/\/_/.test(file.path) || !/^_/.test(file.relative);
		}))

		.pipe($.sourcemaps.init())
		.pipe(
			$.sass({
				includePaths: [config.src.styles, 'node_modules']
			})
		)
		.pipe(
			$.sass({
				outputStyle: 'compressed', //nested, expanded, compact, compressed
				precision: 5,
				errLogToConsole: false
			})
		)
		.pipe($.postcss(plugins))
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest(config.dest.styles))
		.pipe(browserSync.reload({ stream: true }));
}

module.exports = { styles }