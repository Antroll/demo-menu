const tabletUp = window.matchMedia("only screen and (min-width : 768px)").matches;
let menu
let selector
let states
let searchInput

const initSearch = function() {
	menu = this.menu
	selector = this.selector
	states = this.states

	selector.SEARCH_INPUT = '.dMenu-search__input';
	selector.SEARCH_MESSAGE = '.dMenu-search__message';
	states.SEARCH_MESSAGE_HIDDEN = 'dMenu-search__message--hidden';

	searchInput = menu.querySelector(selector.SEARCH_INPUT)

	if (searchInput) {
		searchInput.addEventListener('keyup', search);
	}

}

const search = () => {
	const filter = searchInput.value.toUpperCase();
	const items = menu.querySelectorAll(selector.NAV_ITEM);
	const filteredArr = []

	Array.prototype.forEach.call(
		items, item => {
			const a = item.getElementsByTagName("a")[0];
			const txtValue = a.textContent || a.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				item.style.display = "";
				filteredArr.push(item)
			} else {
				item.style.display = "none";
			}
		})

	if (filteredArr.length == 0) {
		toggleNothingFound(true)
	} else {
		toggleNothingFound(false)
	}

}

const toggleNothingFound = isShowed => {
	const message = menu.querySelector(selector.SEARCH_MESSAGE)

	if (!message) {
		console.warn('component search: there is no message element');
		return
	}

	if (isShowed) {
		message.classList.remove(states.SEARCH_MESSAGE_HIDDEN)
	} else {
		message.classList.add(states.SEARCH_MESSAGE_HIDDEN)
	}

}

const focusSearchInput = () => {
	if (searchInput && tabletUp) {
		setTimeout(() => {
			searchInput.focus()
		}, 10);
	}
}

export {
	initSearch,
	focusSearchInput,
}