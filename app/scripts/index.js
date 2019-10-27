/**
 * https://github.com/Antroll/demo-menu
 */

import '../../dist/styles/demo-menu.css';

import {
    createElementFromHTML,
    getString,
    extendDefaults,
    ajaxGet,
    strReplaceAll,
    initPolyfills,
} from "./utils";

import {
	initialization,
	templateString,
	highlightCurrent,
	initSearch,
	focusSearchInput,
	initThumbs,
} from "./components";


// Define our constructor
class DemoMenu {
	constructor(options) {

		this.menu = null;

		this.selector = {
			TRIGGER: '.dMenu-trigger',
			OVERLAY: '.dMenu-overlay',
			NAV: '.dMenu-nav',
			SEARCH: '.dMenu-search',
			NAV_ITEM: '.dMenu-nav__item',
			NAV_LINK: '.dMenu-nav__link',
			NAV_LINK_NUM: '.dMenu-nav__link-num',
			THUMB_ICON: '.dMenu-nav__thumb-icon',
		};

		this.states = {
			MENU_ACTIVE: 'dMenu-widget--active',
			NAV_LINK_ACTIVE: 'dMenu-nav__link--active',
		};

		var defaults = {
			template: templateString,
			configPath: 'demo/data.json',
			activeOnHover: false,
		}

		const settings = arguments[0]
		const hasSettings = settings && typeof settings === "object"

		if (hasSettings) {
			this.options = extendDefaults(defaults, settings);
		}
	}

	init() {
		initPolyfills();
		this::buildOut(() => {
			this::highlightCurrent();
			this::initSearch();
			this::initThumbs();
			this::initializeListeners();
		});
	}

	show() {
		const { menu, states } = this
		menu.classList.add(states.MENU_ACTIVE);
		this::focusSearchInput()
	}

	hide() {
		const { menu, states } = this
		menu.classList.remove(states.MENU_ACTIVE);
	}

}

function buildOut(callback) {
	const that = this
	const { options } = this

	if (!options.configPath) {
		console.warn('DemoMenu', 'configPath is empty');
		return
	}

	ajaxGet(options.configPath, data => {
		let json

		try {
			json = JSON.parse(data);
		} catch(e) {
			console.warn(`ajaxGet: ${e}`);
			return
		}

		that.menu = that::parseTemplate(options.template, json.pages)
		document.body.appendChild(that.menu);
		callback()
	})
}

/**
 * @param  {string} templateString - string with demo menu template
 * @param  {array} pages           - data for pages
 * @return {node}                  - parsed demo menu element
 */
function parseTemplate (templateString, pages) {
	const { selector } = this
	const menuElem = createElementFromHTML(templateString)
	const listItem = menuElem.querySelector('[data-for]')
	const list = listItem.parentNode
	const pagesArr = Array.prototype.slice.call(pages);

	list.removeChild(listItem);

	if (pagesArr.length < 10) {
		const search = menuElem.querySelector(selector.SEARCH)
		search.parentNode.removeChild(search);
	}

	pagesArr.forEach((page, i) => {
		const listItemClone = listItem.cloneNode(true);
		const thumbIcon = listItemClone.querySelector(selector.THUMB_ICON)
		const linkNum = listItemClone.querySelector(selector.NAV_LINK_NUM)

		listItemClone.removeAttribute('data-for')
		linkNum.innerText = `${i + 1}.`

		if (!page.thumb && thumbIcon) {
			thumbIcon.parentNode.removeChild(thumbIcon);
		}

		let itemStr = getString(listItemClone)
		itemStr = strReplaceAll(itemStr, '{{ href }}', page.href)
		itemStr = strReplaceAll(itemStr, '{{ title }}', page.title)
		itemStr = strReplaceAll(itemStr, '{{ thumb }}', page.thumb)

		const listItemElem = createElementFromHTML(itemStr);
		list.appendChild(listItemElem);
	})

	return menuElem
}

function initializeListeners() {
	const { options, selector, states, menu, show, hide } = this,
		self = this,
		trigger = menu.querySelector(selector.TRIGGER),
		overlay = menu.querySelector(selector.OVERLAY),
		nav = menu.querySelector(selector.NAV);

	let timer

	const triggerClickHandler = e => {
		e.preventDefault()
		if (menu.classList.contains(states.MENU_ACTIVE)) {
			self.hide()
		} else {
			self.show()
		}
	}

	const triggerMouseenter = e => {
		clearTimeout(timer)
		timer = setTimeout(() => {
			self.show()
		}, 400);
	}

	const triggerMouseleave = e => {
		clearTimeout(timer)
		timer = setTimeout(() => {
			self.hide()
		}, 500);
	}

	const overlayClickHandler = e => {
		e.preventDefault()
		if (menu.classList.contains(states.MENU_ACTIVE)) {
			self.hide()
		} else {
			self.show()
		}
	}

	if (trigger) {
		trigger.addEventListener('click', triggerClickHandler);
	}

	if (trigger && options.activeOnHover) {
		menu.addEventListener('mouseenter', triggerMouseenter);
		menu.addEventListener('mouseleave', triggerMouseleave);
	}

	if (overlay) {
		overlay.addEventListener('click', overlayClickHandler);
	}

}

window.DemoMenu = DemoMenu;

initialization();
