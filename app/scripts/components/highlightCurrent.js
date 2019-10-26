const highlightCurrent = function() {
	const { pathname } = location
	const { menu, selector, states } = this

	for (const link of menu.querySelectorAll(selector.ITEM_LINK)) {
		let href = link.getAttribute('href')
		href = href.replace('.html', '')
		href = href.replace('.php', '')

		if (pathname.includes(href)) {
			link.classList.add(states.ITEM_LINK_ACTIVE)
		} else if ( pathname.endsWith("/") && href.includes('index') ) {
			link.classList.add(states.ITEM_LINK_ACTIVE)
		}
	}
}

export {
	highlightCurrent
}