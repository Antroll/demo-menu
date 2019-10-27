const highlightCurrent = function() {
	const { menu, selector, states } = this
	const { pathname } = location

	Array.prototype.forEach.call(
		menu.querySelectorAll(selector.NAV_LINK), link => {
			let href = link.getAttribute('href')
			href = href.replace('.html', '')
			href = href.replace('.php', '')

			if (pathname.includes(href)) {
				link.classList.add(states.NAV_LINK_ACTIVE)
			} else if ( pathname.endsWith("/") && href.includes('index') ) {
				link.classList.add(states.NAV_LINK_ACTIVE)
			}
		})
}

export {
	highlightCurrent
}