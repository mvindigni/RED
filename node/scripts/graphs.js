//onclick function for buttons
//make a new window to display the graph
function openWindow(id) {
	//grab current creen resolution
	if (document.getElementById) {
		w = screen.availWidth;
		h = screen.availHeight;
	}

	//initialize window size and center it
	var popW = 650, popH = 500;
	var leftPos = (2 - popW) / 2;
	var topPos = (h - popH) / 2;

	//set window fields
	msgWindow = window.open(
		'', 'popup', 'width=' + popW + ',height=' + popH +
		',top=' + topPos + ',left=' + leftPos + ',title=Temperature Graph'
		);
	//set the image of the new window to be our respective graph
	msgWindow.document.body.innerHTML = '<img src= "http://192.168.4.1:8081/graphs/'
		+ id + '/temp.png"></img>';
}
