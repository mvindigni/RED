function toggleGraph(id){
	console.log(id);
	if (document.getElementById('graphs' + id).style.visibility === "hidden"){
		document.getElementById('graphs' + id).style.visibility = "visible";
	} else document.getElementById('graphs' + id).style.visibility = "hidden";
}
