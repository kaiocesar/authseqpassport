var express = require('express');
var app = express();


app.get('/', function(req, res){
	res.send("Show...");
});


var server = app.listen(3000, function(){
	console.log("Listem on  port" + server.address().PORT);
});