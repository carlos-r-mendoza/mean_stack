var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/mean-stack').connection;

module.exports = mongoose.connection;