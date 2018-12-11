'use strict';

const myApp = {
	// сет брейкпоинтов для js
	// должны совпадать с теми что в body:after
	mediaBreakpoint: {
		sm: 576,
		md: 768,
		lg: 992,
		xl: 1200
	},
	initBefore: function() {
		document.documentElement.className =
			document.documentElement.className.replace("no-js", "js");
		this.detectIE()
	},

	init: function() {
		this.lazyload();

		if ('objectFit' in document.documentElement.style === false) {
			this.objectFitFallback($('[data-object-fit]'));
		}

		$('.js-tel').mask('+7 (999) 999-99-99', {
			placeholder: '+7 (___) ___-__-__'
		});

		this.buttons();
		this.closeOnFocusLost();
	},

	initOnLoad: function() {
		$('.dot').dotdotdot({ watch: 'window' });
	},

	buttons: function() {
		$(document).on('click', '.menu-trigger', function() {
			$('body').toggleClass('nav-showed');
		});
	},

	closeOnFocusLost: function() {
		$(document).click(function(e) {
			const $trg = $(e.target);
			if (!$trg.closest(".header").length) {
				$('body').removeClass('nav-showed');
			}
		});
	},

	lazyload: function() {
		try {
			lazyload();
		} catch (e) {
			console.log('lazyload fallback');
			$('.lazyload').each(function() {
				const $t = $(this);
				const src = $(this).attr('src');
				const dataSrc = $t.data().src;
				if (typeof src !== typeof undefined && src !== false && $t.is('img')) {
					$t.attr('src', dataSrc)
				} else {
					$t.css({
						'background-image': 'url(' + dataSrc + ')'
					});
				}

			});
		}
	},

	objectFitFallback: function($selector) {
		$selector.each(function(i, item) {
			const $t = $(item);
			const imgUrl = $t.attr('src');
			const fitStyle = $t.attr('data-object-fit');
			if (imgUrl) {
				$t.parent()
					.css({
						'backgroundImage': 'url(' + imgUrl + ')',
						'backgroundSize': fitStyle
					})
					.addClass('fit-img');
			}
		});
	},

	detectIE: function() {
		/**
		 * detect IE
		 * returns version of IE or false, if browser is not Internet Explorer
		 */

		(function detectIE() {
			var ua = window.navigator.userAgent;

			var msie = ua.indexOf('MSIE ');
			if (msie > 0) {
				// IE 10 or older => return version number
				var ieV = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
				document.querySelector('body').className += ' IE';
			}

			var trident = ua.indexOf('Trident/');
			if (trident > 0) {
				// IE 11 => return version number
				var rv = ua.indexOf('rv:');
				var ieV = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
				document.querySelector('body').className += ' IE';
			}

			var edge = ua.indexOf('Edge/');
			if (edge > 0) {
				// IE 12 (aka Edge) => return version number
				var ieV = parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
				document.querySelector('body').className += ' IE';
			}

			// other browser
			return false;
		})();
	},

	getScrollbarSize: function() {
		let scrollbarSize;
		if (scrollbarSize === undefined) {
			const scrollDiv = document.createElement('div');
			scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
			document.body.appendChild(scrollDiv);
			scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
			document.body.removeChild(scrollDiv);
		}
		return scrollbarSize;
	},

	getScreenSize: function() {
		let screenSize =
			window
			.getComputedStyle(document.querySelector('body'), ':after')
			.getPropertyValue('content');
		screenSize = parseInt(screenSize.match(/\d+/));
		return screenSize;
	}
};

myApp.initBefore();

$(function() {
	myApp.init();
});

$(window).on('load', function() {
	myApp.initOnLoad();
});
