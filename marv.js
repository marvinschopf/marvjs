function bodyColor(color) {
	document.body.style.backgroundColor = color;
}

function getAjax(url) {
	var request = new XMLHttpRequest();
	var resp = false;

	request.open("GET",url);
	request.addEventListener('load',function(event) {
		if(request.status != 200) {
			return false;
		} else {
			return request.responseText;
		}
	});
	request.send();
}