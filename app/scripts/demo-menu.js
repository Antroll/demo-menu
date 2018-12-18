(function() {

	// Define our constructor
	window.DemoMenu = function() {

		// Create global element references
		this.menu = null;


		// Define option defaults
		var defaults = {
			template: '<div class="demo-menu"><div class="demo-menu__overlay"></div><div class="demo-menu__nav"><ul class="demo-menu__list demo-menu__list--custom-scroll"><li class="demo-menu__item" data-for="data-for"><a class="demo-menu__link" href="{{ href }}">{{ title }}<i class="demo-menu__thumb-icon" data-thumb="{{ thumb }}">?</i></a></li></ul><div class="demo-menu__thumb-wrap"><img alt=""></div><div class="demo-menu__trigger"><a class="demo-menu__trigger-btn" href="#"><i class="demo-menu__trigger-icon"></i></a></div></div></div>',
			css: '//verstka.dev.magwai.ru/demo-menu/styles/demo-menu.css',
			configPath: 'demo/data.json',
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
		buildOut.call(this);
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
		template.querySelector('[data-for]').remove()
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
		var css = 'h1 { background: red; }',
		head = document.head || document.getElementsByTagName('head')[0],
		link = document.createElement('link');

		link.rel = 'stylesheet';
		link.href = url;

		head.appendChild(link);
	}

	function buildOut() {
		const options = this.options

		if (options.css) {
			addStyles(options.css)
		}

		ajax(options.configPath, function (data) {
			const json = JSON.parse(data);

			parseTemplate(options.template, json.pages)
			initializeEvents();
		})
	}

	function initializeEvents() {
		let timer
		const trigger = document.querySelector('.demo-menu__trigger');
		const overlay = document.querySelector('.demo-menu__overlay');
		const menu = document.querySelector('.demo-menu')
		const nav = document.querySelector('.demo-menu__nav')
		if (trigger) {
			trigger.addEventListener('click', function (e) {
				e.preventDefault()
				if (menu.classList.contains('demo-menu--active')) {
					menu.classList.remove('demo-menu--active');
				} else {
					menu.classList.add('demo-menu--active');
				}
			});

			menu.addEventListener('mouseenter', function () {
				clearTimeout(timer)
				timer = setTimeout(function() {
					menu.classList.add('demo-menu--active');
				}, 400);
			});
			menu.addEventListener('mouseleave', function () {
				clearTimeout(timer)
				timer = setTimeout(function() {
					menu.classList.remove('demo-menu--active');
				}, 500);
			});
		}

		if (overlay) {
			overlay.addEventListener('click', function (e) {
				e.preventDefault()
				menu.classList.toggle('demo-menu--active');
			});
		}

		const thumbIcons = document.querySelectorAll('.demo-menu__thumb-icon')
		if (thumbIcons) {
			for (var i = 0; i < thumbIcons.length; i++) {
				loop()
			}
		}

		const thumbWrap = document.querySelector('.demo-menu__thumb-wrap')
		const thumb = thumbWrap.querySelector('img')
		function loop() {
			thumbIcons[i].addEventListener('mouseenter', function () {
				const src = this.getAttribute('data-thumb')
				thumbWrap.querySelector('img').style.maxHeight = document.querySelector('.demo-menu__nav').clientHeight + 'px';
				thumbWrap.classList.add('demo-menu__thumb-wrap--active')
				thumb.setAttribute('src', src)
			});
			thumbIcons[i].addEventListener('mouseleave', function () {
				thumbWrap.classList.remove('demo-menu__thumb-wrap--active')
				thumb.removeAttribute('src')
			});
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
		// css: false,
	})
	menu.init()
})();
