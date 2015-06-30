var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/mean-stack').connection;

require('./models/test1/customer-model');
require('./models/test1/product-model');

module.exports = mongoose.connection;