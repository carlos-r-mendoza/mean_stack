'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var AddressSchema = new Schema({
	street1: String,
	street2: String,
	city: String,
	state: String
});

module.exports = mongoose.model('Address', AddressSchema);