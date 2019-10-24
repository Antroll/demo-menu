function addStyles (url) {
	const head = document.head || document.getElementsByTagName('head')[0];
	const link = document.createElement('link');

	link.rel = 'stylesheet';
	link.href = url;

	head.appendChild(link);
}

export {
	addStyles,
}