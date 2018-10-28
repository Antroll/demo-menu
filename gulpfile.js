'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var jadeData = require('./data.json');

var configs = {
	jsConcat: [
		'./app/vendors/lazyload.js',
		'./app/vendors/jquery.dotdotdot.min.js',
		'./app/vendors/phone-mask.js',
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

var jsDest = 'dist/scripts';

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
	$.rubySass('app/styles', {
			// style: 'compact',
			style: 'compressed',
			// style: 'expanded',
			precision: 10,
			sourcemap: true
		})
		.on('error', function(err) {
			console.error('Error!', err.message);
		})
		.pipe($.postcss([
			require('autoprefixer'),
		]))
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
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest(jsDest));
});

// concat scripts
gulp.task('concat-scripts', function() {
	return gulp.src(configs.jsConcat)
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
	browserSync.init(configs.browserSync);

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

gulp.task('default', function() {
	gulp.start('serve');
});
