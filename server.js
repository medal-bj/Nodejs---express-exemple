
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/Public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());


var etudiant = [
	{name : 'Ahmed' , age : '22' , desc : 'Ahmed étudiant en SIRT-B '},
	{name : 'Mohamed' , age : '22' , desc : 'Mohamed étudiant en SIRT-B '},
	{name : 'Hamza' , age : '22' , desc : 'Hamza étudiant en SIRT-B '}
]



app.get('/etudiant/:id', function (req, res) {
  res.send(etudiant[req.params.id - 1 ].desc);
});

app.post('/create_etudiant', function (req, res) {
	etudiant.push ({
		"name" : req.body.name ,
		"age" : req.body.age ,
		"desc" : req.body.desc 
	}) ;
  res.send("OK!");
});

app.listen(3000, function () {
  console.log(' on port 3000!');
});