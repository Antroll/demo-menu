(function() {

	// Define our constructor
	window.DemoMenu = function() {

		// Create global element references
		this.menu = null;
		this.trigger = document.querySelector('.demo-menu__trigger');


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
		initializeEvents.call(this);
	}

	DemoMenu.prototype.close = function() {
		var _ = this;
	}

	DemoMenu.prototype.open = function() {
	}

	// Private Methods

	function buildOut() {
	}

	function initializeEvents() {

		if (this.trigger) {
			this.trigger.addEventListener('click', function (e) {
				e.preventDefault()
				document.querySelector('.demo-menu').classList.toggle('demo-menu--active');
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
