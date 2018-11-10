(function() {

	// Define our constructor
	window.DemoMenu = function() {

		// Create global element references
		this.menu = null;
		this.trigger = document.querySelector('.demo-menu__trigger');
		this.overlay = document.querySelector('.demo-menu__overlay');


		// Define option defaults
		var defaults = {
		}

		// Create options by extending defaults with the passed in arugments
		if (arguments[0] && typeof arguments[0] === "object") {
			this.options = extendDefaults(defaults, arguments[0]);
		}

	}

	// Public Methods

	DemoMenu.prototype.init = function() {
		buildOut.call(this);
		initializeEvents.call(this);
	}

	DemoMenu.prototype.close = function() {
		var _ = this;
	}

	DemoMenu.prototype.open = function() {
	}

	// Private Methods

	function buildOut() {
		document.querySelector('.demo-menu__thumb-wrap img').style.maxHeight = document.querySelector('.demo-menu__nav').clientHeight + 'px';
	}

	function initializeEvents() {
		let timer
		const menu = document.querySelector('.demo-menu')
		const nav = document.querySelector('.demo-menu__nav')
		if (this.trigger) {
			this.trigger.addEventListener('click', function (e) {
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
				}, 200);
			});
			menu.addEventListener('mouseleave', function () {
				clearTimeout(timer)
				timer = setTimeout(function() {
					menu.classList.remove('demo-menu--active');
				}, 2000);
			});
		}

		if (this.overlay) {
			this.overlay.addEventListener('click', function (e) {
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

document.addEventListener('DOMContentLoaded', function() {
	var menu = new DemoMenu()
	menu.init()
});
