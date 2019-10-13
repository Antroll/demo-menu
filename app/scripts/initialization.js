const initialization = () => {
	const selector = document.querySelector('[data-demo-data]')
	if (!selector) {
		console.warn('DemoMenu', 'there is no selector with config url');
		return
	}

	const configPath = selector.getAttribute('data-demo-data')
	if (!configPath) {
		console.warn('DemoMenu', 'configPath is empty');
		return
	}

	new DemoMenu({
		configPath: configPath,
		activeOnHover: true,
		css: 'styles/demo-menu.css',
	}).init()
}

export { initialization }

