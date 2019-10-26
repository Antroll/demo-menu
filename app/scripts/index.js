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
} from "./components";


// Define our constructor
class DemoMenu {
	constructor(options) {

		this.menu = null;

		this.selector = {
			MENU: '.demo-menu',
			TRIGGER: '.demo-menu__trigger',
			OVERLAY: '.demo-menu__overlay',
			ITEM_LINK: '.demo-menu__link',
			NAV: '.demo-menu__nav',
			THUMB_WRAP: '.demo-menu__thumb-wrap',
			THUMB_ICON: '.demo-menu__thumb-icon',
		};

		this.states = {
			MENU_ACTIVE: 'demo-menu--active',
			THUMB_WRAP_ACTIVE: 'demo-menu__thumb-wrap--active',
			ITEM_LINK_ACTIVE: 'demo-menu__link--active',
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
			this::initializeListeners();
			this::highlightCurrent();
		});
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
		const json = JSON.parse(data);

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
	const menuElem = createElementFromHTML(templateString)
	const listItem = menuElem.querySelector('[data-for]')
	const list = listItem.parentNode

	list.removeChild(listItem);

	for (const page of pages) {
		const listItemClone = listItem.cloneNode(true);
		listItemClone.removeAttribute('data-for')

		if (!page.thumb) {
			listItemClone.querySelector(this.selector.THUMB_ICON).remove()
		}

		let itemStr = getString(listItemClone)
		itemStr = strReplaceAll(itemStr, '{{ href }}', page.href)
		itemStr = strReplaceAll(itemStr, '{{ title }}', page.title)
		itemStr = strReplaceAll(itemStr, '{{ thumb }}', page.thumb)

		const listItemElem = createElementFromHTML(itemStr);
		list.appendChild(listItemElem);
	}

	return menuElem
}

function initializeListeners() {
	const { options } = this,
		self = this,
		trigger = document.querySelector(self.selector.TRIGGER),
		overlay = document.querySelector(self.selector.OVERLAY),
		menu = document.querySelector(self.selector.MENU),
		thumbWrap = document.querySelector(self.selector.THUMB_WRAP),
		nav = document.querySelector(self.selector.NAV),
		thumbImg = thumbWrap.querySelector('img');

	let timer

	const triggerClickHandler = e => {
		e.preventDefault()
		if (menu.classList.contains(self.states.MENU_ACTIVE)) {
			menu.classList.remove(self.states.MENU_ACTIVE);
		} else {
			menu.classList.add(self.states.MENU_ACTIVE);
		}
	}

	const triggerMouseenter = e => {
		clearTimeout(timer)
		timer = setTimeout(function() {
			menu.classList.add(self.states.MENU_ACTIVE);
		}, 400);
	}

	const triggerMouseleave = e => {
		clearTimeout(timer)
		timer = setTimeout(function() {
			menu.classList.remove(self.states.MENU_ACTIVE);
		}, 500);
	}

	const overlayClickHandler = e => {
		e.preventDefault()
		menu.classList.toggle(self.states.MENU_ACTIVE);
	}

	const thumbIconMouseenter = e => {
		const src = e.target.getAttribute('data-thumb')
		const img = thumbWrap.querySelector('img')
		const navHeight = document.querySelector(self.selector.NAV).clientHeight

		img.style.maxHeight = `${navHeight}px`;
		thumbWrap.classList.add(self.states.THUMB_WRAP_ACTIVE)
		thumbImg.setAttribute('src', src)
	}

	const thumbIconMouseleave = () => {
		thumbWrap.classList.remove(self.states.THUMB_WRAP_ACTIVE)
		thumbImg.removeAttribute('src')
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

	;[...document.querySelectorAll(self.selector.THUMB_ICON)].forEach(thumbIcon => {
		thumbIcon.addEventListener('mouseenter', thumbIconMouseenter);
		thumbIcon.addEventListener('mouseleave', thumbIconMouseleave);
	})

}

window.DemoMenu = DemoMenu;

initialization();
