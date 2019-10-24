const initialization = () => {
	const selector = document.querySelector('[data-demo-data]')
	if (!selector) {
		console.warn('DemoMenu', 'there is no selector with config url');
		return
	}

	new DemoMenu({
		configPath: selector.getAttribute('data-demo-data'),
		activeOnHover: true,
		css: 'styles/demo-menu.css',
	}).init()
}

export { initialization }

