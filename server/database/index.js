'use strict';

var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/mean-stack').connection;

require('./models/test1/product-model');
require('./models/test1/customer-model');

module.exports = mongoose.connection;