(function() {

	// Define our constructor
	window.DemoMenu = function() {

		// Create global element references
		this.menu = null;

		this.selectors = {
			MENU: '.demo-menu',
			TRIGGER: '.demo-menu__trigger',
			OVERLAY: '.demo-menu__overlay',
			NAV: '.demo-menu__nav',
			THUMB_WRAP: '.demo-menu__thumb-wrap',
			THUMB_ICON: '.demo-menu__thumb-icon',
		};

		this.states = {
			MENU_ACTIVE: 'demo-menu--active',
			MENU_INITIALIZED: 'demo-menu--inited',
			THUMB_WRAP_ACTIVE: 'demo-menu__thumb-wrap--active',
		};


		// Define option defaults
		var defaults = {
			template: '<div class="demo-menu"><div class="demo-menu__overlay"></div><div class="demo-menu__nav"><ul class="demo-menu__list demo-menu__list--custom-scroll"><li class="demo-menu__item" data-for="data-for"><a class="demo-menu__link" href="{{ href }}">{{ title }}<i class="demo-menu__thumb-icon" data-thumb="{{ thumb }}">?</i></a></li></ul><div class="demo-menu__thumb-wrap"><img alt=""></div><div class="demo-menu__trigger"><a class="demo-menu__trigger-btn" href="#"><i class="demo-menu__trigger-icon"></i></a></div></div></div>',
			css: '//cdn.jsdelivr.net/gh/Antroll/demo-menu/dist/styles/demo-menu.css',
			configPath: 'demo/data.json',
			activeOnHover: false,
		}

		// Create options by extending defaults with the passed in arugments
		if (arguments[0] && typeof arguments[0] === "object") {
			this.options = extendDefaults(defaults, arguments[0]);
		}

	}

	////////////////////
	// Public Methods //
	////////////////////

	DemoMenu.prototype.init = function() {
		const self = this
		buildOut.call(self, afterBuild);

		function afterBuild () {
			initializeEvents.call(self);
			stylesLoaded.call(self, afterStylesLoaded);
		}

		function afterStylesLoaded () {
			const menu = document.querySelector(self.selectors.MENU)
			menu.removeAttribute('style')
			menu.classList.add(self.states.MENU_INITIALIZED)
		}
	}

	DemoMenu.prototype.close = function() {
		var _ = this;
	}

	DemoMenu.prototype.open = function() {
	}

	/////////////////////
	// Private Methods //
	/////////////////////

	function createElementFromHTML(htmlString) {
		var div = document.createElement('div');
		div.innerHTML = htmlString.trim();

		return div.firstChild;
	}

	const getString = (function() {
		var DIV = document.createElement("div");

		if ('outerHTML' in DIV)
			return function(node) {
				return node.outerHTML;
			};

			return function(node) {
				var div = DIV.cloneNode();
				div.appendChild(node.cloneNode(true));
				return div.innerHTML;
			};

		})();

	function ajax (urlString, callback) {
		var request = new XMLHttpRequest();
		request.open('GET', urlString, true);

		request.onload = function() {
			if (request.status >= 200 && request.status < 400) {
				var data = request.responseText
				callback(data)
			} else {
				console.log('We reached our target server, but it returned an error');
			}
		};

		request.onerror = function() {
			console.log('There was a connection error of some sort');
		};

		request.send();
	}

	function parseTemplate (string, array) {
		const template = createElementFromHTML(string)
		const itemTemplate = template.querySelector('[data-for]')
		const list = itemTemplate.parentNode
		const pages = array
		list.removeChild(itemTemplate);
		template.style.display = 'none';
		for (var i = 0; i < pages.length; i++) {
			const data = pages[i]

			itemTemplate.removeAttribute('data-for')

			let itemStr = getString(itemTemplate)
			itemStr = itemStr.replace('{{ href }}', data.href)
			itemStr = itemStr.replace('{{ title }}', data.title)
			itemStr = itemStr.replace('{{ thumb }}', data.thumb)

			const newItem = createElementFromHTML(itemStr);
			list.appendChild(newItem);
		}
		document.body.appendChild(template);
	}

	function addStyles (url) {
		const head = document.head || document.getElementsByTagName('head')[0];
		const link = document.createElement('link');

		link.rel = 'stylesheet';
		link.href = url;

		head.appendChild(link);
	}

	function stylesLoaded (callback) {
		const self = this
		const overlay = document.querySelector(self.selectors.OVERLAY)
		const waiting = () => {
			const position = getComputedStyle(overlay).getPropertyValue('position')
			if (position !== 'fixed') {
				setTimeout(waiting, 200);
			} else {
				callback()
			}
		};
		waiting();
	}

	function buildOut(callback) {
		const that = this
		const options = that.options

		if (options.css) {
			addStyles(options.css)
		}

		ajax(options.configPath, function (data) {
			const json = JSON.parse(data);

			parseTemplate(options.template, json.pages)

			callback()
		})
	}

	function initializeEvents() {
		const self = this
		const options = self.options
		const trigger = document.querySelector(self.selectors.TRIGGER);
		const overlay = document.querySelector(self.selectors.OVERLAY);
		const menu = document.querySelector(self.selectors.MENU)
		const nav = document.querySelector(self.selectors.NAV)
		let timer
		if (trigger) {
			trigger.addEventListener('click', function (e) {
				e.preventDefault()
				if (menu.classList.contains(self.states.MENU_ACTIVE)) {
					menu.classList.remove(self.states.MENU_ACTIVE);
				} else {
					menu.classList.add(self.states.MENU_ACTIVE);
				}
			});

			if (options.activeOnHover) {

				menu.addEventListener('mouseenter', function () {
					clearTimeout(timer)
					timer = setTimeout(function() {
						menu.classList.add(self.states.MENU_ACTIVE);
					}, 400);
				});
				menu.addEventListener('mouseleave', function () {
					clearTimeout(timer)
					timer = setTimeout(function() {
						menu.classList.remove(self.states.MENU_ACTIVE);
					}, 500);
				});

			}

		}

		if (overlay) {
			overlay.addEventListener('click', function (e) {
				e.preventDefault()
				menu.classList.toggle(self.states.MENU_ACTIVE);
			});
		}

		const thumbIcons = document.querySelectorAll(self.selectors.THUMB_ICON)
		if (thumbIcons) {

			for (var i = 0; i < thumbIcons.length; i++) {
				loop()
			}

			const thumbWrap = document.querySelector(self.selectors.THUMB_WRAP)
			const thumb = thumbWrap.querySelector('img')
			function loop() {
				thumbIcons[i].addEventListener('mouseenter', function () {
					const src = this.getAttribute('data-thumb')
					thumbWrap.querySelector('img').style.maxHeight = document.querySelector(self.selectors.NAV).clientHeight + 'px';
					thumbWrap.classList.add(self.states.THUMB_WRAP_ACTIVE)
					thumb.setAttribute('src', src)
				});
				thumbIcons[i].addEventListener('mouseleave', function () {
					thumbWrap.classList.remove(self.states.THUMB_WRAP_ACTIVE)
					thumb.removeAttribute('src')
				});
			}
		}


	}

	function extendDefaults(source, properties) {
		var property;
		for (property in properties) {
			if (properties.hasOwnProperty(property)) {
				source[property] = properties[property];
			}
		}
		return source;
	}

}());

;(function(){
	const url = document.querySelector('[data-demo-data]').getAttribute('data-demo-data')
	const menu = new DemoMenu({
		configPath: url,
		activeOnHover: true,
		// css: 'styles/demo-menu.css',
	})
	menu.init()
})();
