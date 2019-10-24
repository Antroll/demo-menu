const $ = require('gulp-load-plugins')();

module.exports =  function () {
	var args = Array.prototype.slice.call(arguments);
	const err = args[0]
	$.notify.onError({
		title: 'Error in: '+ err.plugin,
		message: '<%= error.message %>',
		sound: 'Submarine',
	}).apply(this, args);
	this.emit('end');
}
