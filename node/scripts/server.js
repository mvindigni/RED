//import node libraries
import express from 'express';
import jsdom from 'jsdom';
import fs from 'fs';

//initialize libraries and graph file system
const {JSDOM} = jsdom;
var app = express();
let files = fs.readdirSync('/var/www/html/graphs');

//construct website outline using JSDOM
const dom = new JSDOM(`
<!DOCTYPE html>
<head>
<title> JSDOM website! </title>
<link rel ="stylesheet" href="css/styles.css"></link>
<script src='scripts/graphs.js'></script>
</head>
<body style="margin: 0;">
	<div class = 'grid-container'>
		<img class = 'grid-child-img' src = 'src/WPI_logo.png'>
		<h1 class = 'grid-child-text'> R.E.D. Data </h1>
	</div>
	<div id='table-wrapper'>
		<table id='buttons-table'>
			<tr>
				<th> Date </th>
				<th> Show Data </th>
			</tr>
	</div>
	<div id='wrapper'>
		<div id='graphs'></div>
	</div>
</body>
`);

//list of graph names (currently only one graph)
let gnames = '/temp.png'

//get button table reference
let tableRef = dom.window.document.getElementById('buttons-table');

//loop through our graph directory and add buttons to the table
//that open up their respective graph
for (let i = 0; i < files.length; i++){

	//insert new row for each graph
	let newRow = tableRef.insertRow(-1);
	let newCell = newRow.insertCell(0);
	let newText = dom.window.document.createTextNode(files[i]);
	newCell.appendChild(newText);
	newCell = newRow.insertCell(1);

	//add onlick functionality for button added
	newCell.innerHTML = "<button " + " id=" +
		i + " onclick='openWindow(this.id)'>";
}

//extra directories the website needs
app.use('/node', express.static('node'));
app.use('/scripts', express.static('scripts'));
app.use('/graphs', express.static('graphs'));
app.use('/css', express.static('css'));
app.use('/src', express.static('src'));

//upon connection, load the JSDOM to the website
app.get('/', function (req, res) {
	res.send(dom.serialize());
});

//start server to listen on port 8081
var server = app.listen(8081, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log("RED Data app listening at http://%s:%s", host, port);
});
