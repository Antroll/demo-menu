function ajaxGet (urlString, callback) {
	var request = new XMLHttpRequest();
	request.open('GET', urlString, true);

	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
			var data = request.responseText
			callback(data)
		} else {
			console.warn(`We reached our target server, but it returned an error ${request.status}`);
		}
	};

	request.onerror = function(e) {
		console.warn(`There was a connection error of some sort ${e}`);
	};

	request.send();
}

export {
	ajaxGet,
}
