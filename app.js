//initiates express app
var express = require('express');
var app = express();
//path is a node.js module that contains utilites for handling and transforming file paths
var path = require('path');
//
module.exports = app;




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