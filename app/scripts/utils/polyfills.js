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
}

export {
	initPolyfills,
}