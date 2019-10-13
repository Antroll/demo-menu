'use strict';

const gulp =			require('gulp');
const $ =				require('gulp-load-plugins')();
const browserSync =		require('browser-sync');
const reload =			browserSync.reload;
const autoprefixer =	require('autoprefixer');
$.sass.compiler =		require('node-sass');
const webpack =			require('webpack');
const webpackStream =	require('webpack-stream');

const pugData =			require('./data.json');
const webpackConfig = require('./webpack.config.js')

const config = {
	src: {
		root: 'app',
		pug: 'app/templates/**/*.pug',
		templates: 'app/templates',
		scss: 'app/styles/**/*.{sass,scss}',
		styles: 'app/styles',
		js: 'app/scripts/**/*.js',
		jsEntry: 'app/scripts/index.js',
	},
	dest: {
		root: 'dist',
		styles: 'dist/styles',
		scripts: 'dist/scripts',
	},
	browserSync: {
		reloadOnRestart: true,
		notify: false,
		port: 9000,
		startPath: "/",
		server: {
			baseDir: ['dist', 'app']
		}
	}
}

// compile jade
gulp.task('views', function() {
	return gulp.src([config.src.pug])
		.pipe($.plumber())

		//only pass unchanged *main* files and *all* the partials
		.pipe($.changed('dist', { extension: '.html' }))

		//filter out unchanged partials, but it only works when watching
		.pipe($.if(browserSync.active, $.cached('pug')))

		//find files that depend on the files that have changed
		.pipe($.pugInheritance({ basedir: config.src.templates, extension: '.pug', skip:'node_modules' }))

		//filter out partials (folders and files starting with "_" )
		.pipe($.filter(function(file) {
			return !/\_/.test(file.path) && !/^_/.test(file.relative);
		}))

		.pipe($.pug({
			locals: pugData,
			pretty: false
		}))
		.pipe($.beml({
			elemPrefix: '__',
			modPrefix: '--',
			modDlmtr: '-'
		}))
		.pipe($.fileInclude({ basepath: config.dest.root }))
		.pipe($.htmlPrettify({ indent_char: '	', indent_size: 1 }))
		.pipe(gulp.dest(config.dest.root))
		.pipe(reload({ stream: true }));
});

// compile sass
gulp.task('styles', function() {
	const plugins = [autoprefixer()];
	return gulp.src(config.src.scss)
		.pipe($.plumber())

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
		.pipe(reload({ stream: true }));
});

// view and check scripts
/*gulp.task('scripts', function() {
	return gulp.src(config.src.js)
		.pipe($.filter(function(file) {
			return !/\_/.test(file.path) && !/^_/.test(file.relative);
		}))
		.pipe($.plumber())
		.pipe($.sourcemaps.init())
		.pipe($.babel({
			presets: ['es2015']
		}))
		.pipe($.uglify())
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest(config.dest.scripts));
});*/

// view and check scripts
gulp.task('scripts', function() {
	webpackConfig.mode = 'development'
	webpackConfig.devtool = 'eval-source-map'

	return gulp.src(config.src.jsEntry)
		.pipe(webpackStream(webpackConfig))
		.pipe(gulp.dest(config.dest.scripts));
});

gulp.task('scriptsBuild', function() {
	return gulp.src(config.src.jsEntry)
		.pipe(webpackStream(webpackConfig))
		.pipe(gulp.dest(config.dest.scripts));
});

// main task
gulp.task('serve', $.sync(gulp).sync([
	['views', 'styles', 'scripts']
]), function() {
	browserSync.init(config.browserSync);

	// watch for changes
	gulp.watch([
		'dist/scripts/**/*.js',
		'app/img/**/*'
	]).on('change', reload);

	gulp.watch(config.src.js, ['scripts']);
	gulp.watch(config.src.scss, ['styles']);
	gulp.watch(config.src.pug, ['views']);
});

gulp.task('build', ['views', 'styles', 'scriptsBuild']);

gulp.task('default', function() {
	gulp.start('serve');
});
