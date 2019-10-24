const SRC = 'app'
const DEST = 'dist'

const config = {
	src: {
		root: `${SRC}`,
		pug: `${SRC}/templates/**/*.pug`,
		templates: `${SRC}/templates`,
		scss: `${SRC}/styles/**/*.{sass,scss}`,
		styles: `${SRC}/styles`,
		js: `${SRC}/scripts/**/*.js`,
		jsEntry: `${SRC}/scripts/index.js`,
	},
	dest: {
		root: `${DEST}`,
		styles: `${DEST}/styles`,
		scripts: `${DEST}/scripts`,
	},
	browserSync: {
		reloadOnRestart: true,
		notify: false,
		startPath: "/",
		server: {
			baseDir: [`${DEST}`, `${SRC}`]
		}
	},
	errorHandler: require('./utils/errorHandler')
}

module.exports = { config };