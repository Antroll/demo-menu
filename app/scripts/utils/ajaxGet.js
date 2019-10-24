function ajaxGet (urlString, callback) {
	var request = new XMLHttpRequest();
	request.open('GET', urlString, true);

	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
			var data = request.responseText
			callback(data)
		} else {
			console.warn('We reached our target server, but it returned an error');
		}
	};

	request.onerror = function() {
		console.warn('There was a connection error of some sort');
	};

	request.send();
}

export default ajaxGet
