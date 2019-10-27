const initPolyfills = () => {
	/**
	 * polyfill for elem.closest
	 */
	(function(ELEMENT) {
		ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;
		ELEMENT.closest = ELEMENT.closest || function closest(selector) {
			if (!this) return null;
			if (this.matches(selector)) return this;
			if (!this.parentElement) {return null}
				else return this.parentElement.closest(selector)
			};
	}(Element.prototype));

	/**
	 * polyfill for elem.hasClass
	 */
	Element.prototype.hasClass = function(className) {
		return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
	};

	// includes
	if (!String.prototype.includes) {
		String.prototype.includes = function(search, start) {
			if (typeof start !== 'number') {
				start = 0;
			}

			if (start + search.length > this.length) {
				return false;
			} else {
				return this.indexOf(search, start) !== -1;
			}
		};
	}

	// endsWith
	if (!String.prototype.endsWith) {
		String.prototype.endsWith = function(search, this_len) {
			if (this_len === undefined || this_len > this.length) {
				this_len = this.length;
			}
			return this.substring(this_len - search.length, this_len) === search;
		};
	}
}

export {
	initPolyfills,
}