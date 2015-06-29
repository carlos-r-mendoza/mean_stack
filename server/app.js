var express = require('express');
var app = express();



app.get('/', function(req, res){
	res.sendFile(__dirname + "/index.html");
});

app.listen(3000);

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));
db.once('open', function (callback){
	console.log('mongodb connected!');
})