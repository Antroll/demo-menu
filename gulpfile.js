'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const autoprefixer = require('autoprefixer');

const jadeData = require('./data.json');

const config = {
	jsConcat: [
		// './app/vendors/lazyload.js',
		// './app/vendors/jquery.dotdotdot.min.js',
		// './app/vendors/phone-mask.js',
	],
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

const jsDest = 'dist/scripts';

// compile jade
gulp.task('views', function() {
	return gulp.src(['app/templates/**/*.jade'])
		.pipe($.plumber())

		//only pass unchanged *main* files and *all* the partials
		.pipe($.changed('dist', { extension: '.html' }))

		//filter out unchanged partials, but it only works when watching
		.pipe($.if(browserSync.active, $.cached('jade')))

		//find files that depend on the files that have changed
		.pipe($.jadeInheritance({ basedir: 'app/templates' }))

		//filter out partials (folders and files starting with "_" )
		.pipe($.filter(function(file) {
			return !/\_/.test(file.path) && !/^_/.test(file.relative);
		}))

		.pipe($.jade({
			locals: jadeData,
			pretty: false
		}))
		.pipe($.beml({
			elemPrefix: '__',
			modPrefix: '--',
			modDlmtr: '-'
		}))
		.pipe($.fileInclude({ basepath: 'dist' }))
		.pipe($.htmlPrettify({ indent_char: '	', indent_size: 1 }))
		.pipe(gulp.dest('dist'))
		.pipe(reload({ stream: true }));
});

// compile sass
gulp.task('styles', function() {
	const plugins = [autoprefixer()];
	$.rubySass('app/styles', {
			style: 'compressed', //compressed, compact, expanded
			precision: 10,
			sourcemap: true
		})
		.on('error', function(err) {
			console.error('Error!', err.message);
		})
		.pipe($.postcss(plugins))
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest('dist/styles'))
		.pipe(reload({ stream: true }));
});

// view and check scripts
gulp.task('scripts', function() {
	return gulp.src(['app/scripts/**/*.js', '!app/scripts/modernizr/modernizr.custom.js'])
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
		.pipe(gulp.dest(jsDest));
});

// concat scripts
gulp.task('concat-scripts', function() {
	return gulp.src(config.jsConcat)
		.pipe($.concat('vendors.js'))
		.pipe(gulp.dest(jsDest))
});

// sprite-gen
gulp.task('png-sprite', function() {
	var spriteData = gulp.src('app/img/sprite/raster/*.png').pipe($.spritesmith({
		imgName: 'sprite.png',
		cssName: '../../../app/styles/includes/_sprite.scss',
		padding: 20,
		imgPath: '../img/theme/sprite.png'
	}));
	return spriteData.pipe(gulp.dest('dist/img/theme/'));
});

// SVG sprite
gulp.task('svg-sprite', function() {
	gulp.src('app/img/sprite/svg/*.svg')
		.pipe($.plumber())
		.pipe($.svgSprite({
			shape: {
				dimension: {
					maxWidth: 32,
					maxHeight: 32
				},
				spacing: {
					padding: 0
				},
				id: {
					generator: 'si-'
				}
			},
			mode: {
				symbol: {
					sprite: "../sprite.symbol.svg"
				}
			}
		})).on('error', function(error) { console.log(error); })
		.pipe(gulp.dest('dist/img/theme'));
});


// main task
gulp.task('serve', $.sync(gulp).sync([
	['views', 'png-sprite', 'styles', 'scripts', 'concat-scripts', 'svg-sprite']
]), function() {
	browserSync.init(config.browserSync);

	// watch for changes
	gulp.watch([
		'dist/scripts/**/*.js',
		'app/img/**/*'
	]).on('change', reload);

	gulp.watch('app/scripts/**/*.js', ['scripts']);
	gulp.watch('app/plugins/**/*.js', ['concat-scripts']);
	gulp.watch('app/styles/**/*.scss', ['styles']);
	gulp.watch('app/**/*.jade', ['views']);
	gulp.watch('app/img/sprite/**/*.png', ['png-sprite']);
	gulp.watch('app/img/sprite/**/*.svg', ['svg-sprite', 'views']);
});

gulp.task('build', ['views', 'png-sprite', 'styles', 'scripts', 'concat-scripts', 'svg-sprite']);

gulp.task('default', function() {
	gulp.start('serve');
});
