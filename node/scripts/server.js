import express from 'express';
import jsdom from 'jsdom';
import fs from 'fs';

const { JSDOM} = jsdom;
var app = express();
let files = fs.readdirSync('/var/www/html/graphs');

//function toggleGraph(id){
//	console.log('graphs' + id);
//	if (dom.window.document.getElementById('graphs' + id).style.visability === "hidden"){
//		dom.window.document.getElementById('graphs' + id).style.visability = "visible";
//	} else dom.window.document.getElementById('graphs' + id).style.visability = "hidden";
//}

const dom = new JSDOM(`
<!DOCTYPE html>
<head>
<title> JSDOM website! </title>
<link rel ="stylesheet" href="styles.css"></link>
<script src='scripts/graphs.js'></script>
</head>
<body>
<center><p> RED Data </p></center>
<center><div id='buttons'></div></center>
<center><div id='wrapper'>
<div id='graphs'></div>
</div></center>
</body>
`);

let gnames = ['/battery.png', '/sig.png', '/temp.png'];

console.log(files.length);

for (let i = 0; i < files.length; i++){

	dom.window.document.getElementById('buttons').innerHTML +=
		'<button id=' + i + ' onclick="toggleGraph(this.id)">' + files[i] + '</button>';

	let graphs = dom.window.document.createElement("div");
	graphs.id = "graphs" + i;
	graphs.style.visibility = "hidden";
	console.log(graphs.id);
	dom.window.document.getElementById('graphs').appendChild(graphs);

	for (let j = 0; j < gnames.length; j++){
		let graph = dom.window.document.createElement("img");
		graph.src = "graphs/" + files[i] + gnames[j];
		dom.window.document.getElementById('graphs' + i).appendChild(graph);
	}
}

app.use('/scripts', express.static('scripts'));
app.use('/graphs', express.static('graphs'));
app.use('/css', express.static('css'));

app.get('/', function (req, res) {
	res.send(dom.serialize());
});

var server = app.listen(8081, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log("Example app listening at http://%s:%s", host, port)
});
