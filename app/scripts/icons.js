(function(doc) {
	const path = document.querySelector('[data-svg-path]').getAttribute('data-svg-path')
	const scripts = doc.getElementsByTagName('script')
	const script = scripts[scripts.length - 1]
	const xhr = new XMLHttpRequest()
	xhr.onload = function() {
		let div = doc.createElement('div')
		div.innerHTML = this.responseText
		div.className += div.className ? ' visuallyhidden' : 'visuallyhidden'
		script.parentNode.insertBefore(div, script)
	}
	xhr.open('get', path, true)
	xhr.send()
})(document)
