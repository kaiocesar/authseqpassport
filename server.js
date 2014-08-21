var express = require('express')
	, flash = require('connect-flash')
	, passport = require('passport')
	, bodyParser = require('body-parser')
	, cookieParser = require('cookie-parser')
	, Sequelize = require('sequelize');

LocalStrategy = require('passport-local').Strategy;


var app = express();

app.use(cookieParser());
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());



app.get('/', function(req, res){
	res.send("Show...");
});


var server = app.listen(3000, function(){
	console.log("Listem on  port" + server.address().PORT);
});