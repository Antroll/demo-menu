!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=i=function(e){return n(e)}:e.exports=i=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},i(t)}e.exports=i},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}e.exports=function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}},function(e,t,n){var i=n(4);"string"==typeof i&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};n(6)(i,r);i.locals&&(e.exports=i.locals)},function(e,t,n){(e.exports=n(5)(!1)).push([e.i,'.dMenu-widget{position:absolute;z-index:99999999;font-size:16px;line-height:1.5;font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"}.dMenu-widget *,.dMenu-widget *::before,.dMenu-widget *::after{box-sizing:border-box}.dMenu-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(39,45,54,0.9);visibility:hidden;opacity:0;-webkit-transition:all 0.3s ease;transition:all 0.3s ease}.dMenu-widget--active .dMenu-overlay{visibility:visible;opacity:1}.dMenu-nav{position:fixed;top:10px;bottom:10px;left:-300px;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;width:300px;padding:15px 42px 15px 10px;background-color:#38414e;border-radius:0 8px 8px 0;-webkit-transition:all 0.3s ease;transition:all 0.3s ease}@media (min-width: 768px){.dMenu-nav{top:15px;bottom:15px;padding:20px 50px 20px 10px}}.dMenu-widget--active .dMenu-nav{left:0;box-shadow:0 0 20px #1d1d1d}.dMenu-nav__search{margin:15px 0 0;-webkit-box-ordinal-group:2;order:1}@media (min-width: 768px){.dMenu-nav__search{margin:0 0 15px;-webkit-box-ordinal-group:1;order:0}}.dMenu-nav__list{counter-reset:demoList;opacity:0;padding:0;margin:auto 0;-webkit-transform:translateX(-40px);transform:translateX(-40px);-webkit-transition:all 0.2s ease 0.1s;transition:all 0.2s ease 0.1s;max-height:100%;overflow-y:auto}.dMenu-nav__list--custom-scroll::-webkit-scrollbar{width:8px}.dMenu-nav__list--custom-scroll::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3)}.dMenu-nav__list--custom-scroll::-webkit-scrollbar-thumb{background-color:#1e232a;border-radius:8px}.dMenu-nav__search ~ .dMenu-nav__list{margin:auto 0 0}@media (min-width: 768px){.dMenu-nav__search ~ .dMenu-nav__list{margin:0 0 auto}}.dMenu-widget--active .dMenu-nav__list{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}.dMenu-nav__item{list-style:none;margin-top:5px}.dMenu-nav__item:first-of-type{margin-top:0}.dMenu-nav__link{position:relative;display:-webkit-box;display:flex;padding:6px 40px 8px 8px;background-color:#272d36;border-radius:8px;line-height:1.1;color:#fff;border-color:rgba(0,0,0,0);text-decoration:none;-webkit-transition:background-color 0.2s, border-color 0.2s;transition:background-color 0.2s, border-color 0.2s}.dMenu-nav__link:hover{color:#fff;background-color:#1e232a;text-decoration:none}.dMenu-nav__link:focus{outline:none;border-bottom:1px solid #12aaeb;padding-bottom:7px}.dMenu-nav__link--active{border-left:3px solid #12aaeb}.dMenu-nav__link-num{flex-shrink:0;font-style:normal;margin-right:5px;color:rgba(255,255,255,0.3)}.dMenu-nav__link-addr{display:block;font-size:10px;margin-top:5px;letter-spacing:0.1em;color:rgba(255,255,255,0.3);font-weight:500;line-height:1;-webkit-transition:color .2s;transition:color .2s}.dMenu-nav__link:focus .dMenu-nav__link-addr,.dMenu-nav__link:hover .dMenu-nav__link-addr{color:#12aaeb}.dMenu-nav__thumb-icon{display:none}@media (min-width: 768px){.dMenu-nav__thumb-icon{position:absolute;top:0.57em;right:8px;width:20px;height:20px;border-radius:50%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;background-color:#38414e;color:#12aaeb;font-style:normal}}.dMenu-search{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.dMenu-search__box{position:relative}.dMenu-search__label{position:absolute;left:0;top:0;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;width:1em;height:36px;margin:0;-webkit-transition:0.2s;transition:0.2s}.dMenu-search__input:focus ~ .dMenu-search__label{color:#12aaeb}.dMenu-search__input{display:block;background:none;border:none;padding:0 0 0 1.5em;height:36px;width:100%;border:2px solid rgba(39,45,54,0);border-width:0 0 2px;color:#fff;-webkit-transition:0.2s;transition:0.2s;border-radius:8px}.dMenu-search__input::-webkit-input-placeholder{color:#fff;opacity:0.3}.dMenu-search__input:-moz-placeholder{color:#fff;opacity:0.3}.dMenu-search__input::-moz-placeholder{color:#fff;opacity:0.3}.dMenu-search__input:-ms-input-placeholder{color:#fff;opacity:0.3}.dMenu-search__input:focus{outline:none;border-color:#12aaeb}.dMenu-search__message{margin:20px 0;color:#fff;-webkit-box-ordinal-group:0;order:-1}@media (min-width: 768px){.dMenu-search__message{-webkit-box-ordinal-group:1;order:0}}.dMenu-search__message--hidden{display:none}.dMenu-trigger{position:absolute;bottom:0;left:100%;width:50px;height:40px;border-radius:0 8px 8px 0;opacity:0.2;-webkit-transition:all 0.3s ease;transition:all 0.3s ease;cursor:pointer;-webkit-animation:humbleTriggerMobile 0.4s ease-in;animation:humbleTriggerMobile 0.4s ease-in}@media (min-width: 768px){.dMenu-trigger{top:50%;height:100px;margin-left:-40px;margin-top:-50px;opacity:0.3;background-color:#38414e;-webkit-animation:humbleTriggerTablet 0.6s ease-in;animation:humbleTriggerTablet 0.6s ease-in;box-shadow:0 0 5px #fff}}@media (min-width: 768px){.dMenu-trigger--active,.dMenu-trigger:hover{margin-left:0;opacity:1;box-shadow:0 0 20px #1d1d1d}}.dMenu-widget--active .dMenu-trigger{opacity:1;box-shadow:none;margin-left:-45px}@media (min-width: 768px){.dMenu-widget--active .dMenu-trigger{margin-left:-50px}}.dMenu-trigger__btn{display:block;position:absolute;top:50%;margin-top:-14px;left:10px;width:28px;height:28px;border-radius:50%;background-color:#272d36;-webkit-transition:all 0.3s ease;transition:all 0.3s ease}.dMenu-trigger:hover .dMenu-trigger__btn{background-color:#1e232a}.dMenu-trigger__icon,.dMenu-trigger__icon:before,.dMenu-trigger__icon:after{background:#12aaeb}.dMenu-trigger__icon{position:absolute;top:50%;margin-top:-1px;left:15%;width:70%;height:2px;text-indent:200%;-webkit-transition:opacity 0.25s;transition:opacity 0.25s}.dMenu-trigger__icon:before,.dMenu-trigger__icon:after{content:\'\';position:absolute;top:50%;left:0;width:100%;height:2px;pointer-events:none;-webkit-transition:-webkit-transform 0.25s;transition:-webkit-transform 0.25s;transition:transform 0.25s;transition:transform 0.25s, -webkit-transform 0.25s;-webkit-transform-origin:50% 50%;transform-origin:50% 50%}.dMenu-trigger__icon:before{-webkit-transform:translate3d(0, -6px, 0) scale3d(0.8, 1, 1);transform:translate3d(0, -6px, 0) scale3d(0.8, 1, 1)}.dMenu-trigger__icon:after{-webkit-transform:translate3d(0, 4px, 0) scale3d(0.8, 1, 1);transform:translate3d(0, 4px, 0) scale3d(0.8, 1, 1)}.dMenu-widget--active .dMenu-trigger__icon{background-color:rgba(255,255,255,0)}.dMenu-widget--active .dMenu-trigger__icon:before{-webkit-transform:rotate3d(0, 0, 1, 45deg);transform:rotate3d(0, 0, 1, 45deg)}.dMenu-widget--active .dMenu-trigger__icon:after{-webkit-transform:rotate3d(0, 0, 1, -45deg);transform:rotate3d(0, 0, 1, -45deg)}.dMenu-thumb-wrap{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:50vw;opacity:0;visibility:hidden;-webkit-transition:all 0.2s;transition:all 0.2s}.dMenu-thumb-wrap--position{position:absolute;left:100%;margin-left:50px;top:0;bottom:0}.dMenu-thumb-wrap img{display:block;max-width:100%;box-shadow:0 0 20px #1d1d1d}@media (min-width: 768px){.dMenu-thumb-wrap--active{opacity:1;visibility:visible}}.dMenu-icon{display:inline-block}.dMenu-icon--search{display:inline-block;position:relative;width:1em;height:1em;text-align:center}.dMenu-icon--search:before{content:\'\';position:absolute;top:0;left:0;width:0.7em;height:0.7em;border:0.1em solid;border-radius:50%}.dMenu-icon--search:after{content:\'\';position:absolute;box-sizing:content-box;right:0;bottom:0.15em;width:0.4em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border:0.06em solid;border-top-right-radius:0.06em;border-bottom-right-radius:0.06em}@-webkit-keyframes humbleTriggerMobile{50%{-webkit-transform:scale(1.1);transform:scale(1.1);opacity:1}}@keyframes humbleTriggerMobile{50%{-webkit-transform:scale(1.1);transform:scale(1.1);opacity:1}}@-webkit-keyframes humbleTriggerTablet{50%{-webkit-transform:translateX(10px);transform:translateX(10px);opacity:1}}@keyframes humbleTriggerTablet{50%{-webkit-transform:translateX(10px);transform:translateX(10px);opacity:1}}\n',""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=(a=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),o=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot).concat(e," */")}));return[n].concat(o).concat([r]).join("\n")}var a,s,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(var a=0;a<e.length;a++){var s=e[a];null!=s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),t.push(s))}},t}},function(e,t,n){"use strict";var i,r={},o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function s(e,t){for(var n=[],i={},r=0;r<e.length;r++){var o=e[r],a=t.base?o[0]+t.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};i[a]?i[a].parts.push(s):n.push(i[a]={id:a,parts:[s]})}return n}function l(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=r[i.id],a=0;if(o){for(o.refs++;a<o.parts.length;a++)o.parts[a](i.parts[a]);for(;a<i.parts.length;a++)o.parts.push(m(i.parts[a],t))}else{for(var s=[];a<i.parts.length;a++)s.push(m(i.parts[a],t));r[i.id]={id:i.id,refs:1,parts:s}}}}function c(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var i=n.nc;i&&(e.attributes.nonce=i)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var r=a(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function p(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function f(e,t,n){var i=n.css,r=n.media,o=n.sourceMap;if(r&&e.setAttribute("media",r),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var h=null,b=0;function m(e,t){var n,i,r;if(t.singleton){var o=b++;n=h||(h=c(t)),i=p.bind(null,n,o,!1),r=p.bind(null,n,o,!0)}else n=c(t),i=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e,t);return l(n,t),function(e){for(var i=[],o=0;o<n.length;o++){var a=n[o],c=r[a.id];c&&(c.refs--,i.push(c))}e&&l(s(e,t),t);for(var d=0;d<i.length;d++){var u=i[d];if(0===u.refs){for(var p=0;p<u.parts.length;p++)u.parts[p]();delete r[u.id]}}}}},function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),o=n(1),a=n.n(o),s=n(2),l=n.n(s);n(3);function c(e){var t=document.createElement("div");return t.innerHTML=e.trim(),t.firstChild}var d,u="outerHTML"in(d=document.createElement("div"))?function(e){return e.outerHTML}:function(e){var t=d.cloneNode();return t.appendChild(e.cloneNode(!0)),t.innerHTML};var p,f,h,b,m,g,v,_,M,y=function(e,t,n){return e.replace(new RegExp(t,"g"),n)},x='\n<div class="dMenu-widget">\n\t<div class="dMenu-overlay"></div>\n\t<div class="dMenu-nav">\n\t\t<div class="dMenu-nav__search dMenu-search">\n\t\t\t<div class="dMenu-search__box">\n\t\t\t\t<input class="dMenu-search__input" id="dMenu-search" type="text" placeholder="search..." name="dMenu-search">\n\t\t\t\t<label class="dMenu-search__label" for="dMenu-search"><i class="dMenu-icon dMenu-icon--search"></i>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class="dMenu-search__message dMenu-search__message--hidden">Nothing found 😐</div>\n\t\t</div>\n\t\t<div class="dMenu-nav__list dMenu-nav__list--custom-scroll">\n\t\t\t<div class="dMenu-nav__item" data-for="data-for"><a class="dMenu-nav__link" href="{{ href }}"><i class="dMenu-nav__link-num"></i><div class="dMenu-nav__link-inner">{{ title }}<span class="dMenu-nav__link-addr">{{ href }}</span></div><i class="dMenu-nav__thumb-icon" data-thumb="{{ thumb }}">?</i></a>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="dMenu-thumb-wrap dMenu-thumb-wrap--position">\n\t\t\t<img alt>\n\t\t</div>\n\t\t<div class="dMenu-trigger"><a class="dMenu-trigger__btn" href="#"><i class="dMenu-trigger__icon"></i></a>\n\t\t</div>\n\t</div>\n</div>\n',w=function(){var e=this.menu,t=this.selector,n=this.states,i=location.pathname;Array.prototype.forEach.call(e.querySelectorAll(t.NAV_LINK),(function(e){var t=e.getAttribute("href");t=(t=t.replace(".html","")).replace(".php",""),i.includes(t)?e.classList.add(n.NAV_LINK_ACTIVE):i.endsWith("/")&&t.includes("index")&&e.classList.add(n.NAV_LINK_ACTIVE)}))},k=function(){var e=this.menu,t=this.selector;b=this.states,t.THUMB_WRAP=".dMenu-thumb-wrap",b.THUMB_WRAP_ACTIVE="dMenu-thumb-wrap--active",p=e.querySelector(t.THUMB_WRAP),f=p.querySelector("img"),h=e.querySelector(t.NAV),Array.prototype.forEach.call(e.querySelectorAll(t.THUMB_ICON),(function(e){e.addEventListener("mouseenter",E),e.addEventListener("mouseleave",S)}))},E=function(e){var t=e.target.getAttribute("data-thumb"),n=p.querySelector("img"),i=h.clientHeight;n.style.maxHeight="".concat(i,"px"),p.classList.add(b.THUMB_WRAP_ACTIVE),f.setAttribute("src",t)},S=function(){p.classList.remove(b.THUMB_WRAP_ACTIVE),f.removeAttribute("src")},T=window.matchMedia("only screen and (min-width : 768px)").matches,A=function(){m=this.menu,g=this.selector,v=this.states,g.SEARCH_INPUT=".dMenu-search__input",g.SEARCH_MESSAGE=".dMenu-search__message",v.SEARCH_MESSAGE_HIDDEN="dMenu-search__message--hidden",(_=m.querySelector(g.SEARCH_INPUT))&&_.addEventListener("keyup",N)},N=function(){var e=_.value.toUpperCase(),t=m.querySelectorAll(g.NAV_ITEM),n=[];Array.prototype.forEach.call(t,(function(t){var i=t.getElementsByTagName("a")[0];(i.textContent||i.innerText).toUpperCase().indexOf(e)>-1?(t.style.display="",n.push(t)):t.style.display="none"})),0==n.length?C(!0):C(!1)},C=function(e){var t=m.querySelector(g.SEARCH_MESSAGE);t?e?t.classList.remove(v.SEARCH_MESSAGE_HIDDEN):t.classList.add(v.SEARCH_MESSAGE_HIDDEN):console.warn("component search: there is no message element")},I=function(){_&&T&&setTimeout((function(){_.focus()}),10)},L=function(){function e(t){a()(this,e),this.menu=null,this.selector={TRIGGER:".dMenu-trigger",OVERLAY:".dMenu-overlay",NAV:".dMenu-nav",SEARCH:".dMenu-search",NAV_ITEM:".dMenu-nav__item",NAV_LINK:".dMenu-nav__link",NAV_LINK_NUM:".dMenu-nav__link-num",THUMB_ICON:".dMenu-nav__thumb-icon"},this.states={MENU_ACTIVE:"dMenu-widget--active",NAV_LINK_ACTIVE:"dMenu-nav__link--active"};var n={template:x,configPath:"demo/data.json",activeOnHover:!1},i=arguments[0];i&&"object"===r()(i)&&(this.options=function(e,t){var n;for(n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}(n,i))}return l()(e,[{key:"init",value:function(){var e,t=this;(e=Element.prototype).matches=e.matches||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector,e.closest=e.closest||function(e){return this?this.matches(e)?this:this.parentElement?this.parentElement.closest(e):null:null},Element.prototype.hasClass=function(e){return this.className&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(this.className)},String.prototype.includes||(String.prototype.includes=function(e,t){return"number"!=typeof t&&(t=0),!(t+e.length>this.length)&&-1!==this.indexOf(e,t)}),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(void 0===t||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e}),H.call(this,(function(){w.call(t),A.call(t),k.call(t),U.call(t)}))}},{key:"show",value:function(){var e=this.menu,t=this.states;e.classList.add(t.MENU_ACTIVE),I.call(this)}},{key:"hide",value:function(){var e=this.menu,t=this.states;e.classList.remove(t.MENU_ACTIVE)}}]),e}();function H(e){var t=this,n=this.options;n.configPath?function(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.onload=function(){if(n.status>=200&&n.status<400){var e=n.responseText;t(e)}else console.warn("We reached our target server, but it returned an error ".concat(n.status))},n.onerror=function(e){console.warn("There was a connection error of some sort ".concat(e))},n.send()}(n.configPath,(function(i){var r;try{r=JSON.parse(i)}catch(e){return void console.warn("ajaxGet: ".concat(e))}t.menu=R.call(t,n.template,r.pages),document.body.appendChild(t.menu),e()})):console.warn("DemoMenu","configPath is empty")}function R(e,t){var n=this.selector,i=c(e),r=i.querySelector("[data-for]"),o=r.parentNode,a=Array.prototype.slice.call(t);if(o.removeChild(r),a.length<10){var s=i.querySelector(n.SEARCH);s.parentNode.removeChild(s)}return a.forEach((function(e,t){var i=r.cloneNode(!0),a=i.querySelector(n.THUMB_ICON),s=i.querySelector(n.NAV_LINK_NUM);i.removeAttribute("data-for"),s.innerText="".concat(t+1,"."),!e.thumb&&a&&a.parentNode.removeChild(a);var l=u(i);l=y(l,"{{ href }}",e.href),l=y(l,"{{ title }}",e.title);var d=c(l=y(l,"{{ thumb }}",e.thumb));o.appendChild(d)})),i}function U(){var e,t=this.options,n=this.selector,i=this.states,r=this.menu,o=(this.show,this.hide,this),a=r.querySelector(n.TRIGGER),s=r.querySelector(n.OVERLAY);r.querySelector(n.NAV);a&&a.addEventListener("click",(function(e){e.preventDefault(),r.classList.contains(i.MENU_ACTIVE)?o.hide():o.show()})),a&&t.activeOnHover&&(r.addEventListener("mouseenter",(function(t){clearTimeout(e),e=setTimeout((function(){o.show()}),400)})),r.addEventListener("mouseleave",(function(t){clearTimeout(e),e=setTimeout((function(){o.hide()}),500)}))),s&&s.addEventListener("click",(function(e){e.preventDefault(),r.classList.contains(i.MENU_ACTIVE)?o.hide():o.show()}))}window.DemoMenu=L,(M=document.querySelector("[data-demo-data]"))?new DemoMenu({configPath:M.getAttribute("data-demo-data"),activeOnHover:!0}).init():console.warn("DemoMenu","there is no selector with config url")}]);