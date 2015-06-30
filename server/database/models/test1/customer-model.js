'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var AddressSchema = new Schema({
	street1: String,
	street2: String,
	city: String,
	state: String
});

var CustomerSchema = new Schema({
	firstName: String,
	lastName: String,
	emails: String,
	phones: [String],
	address: {type: Schema.Types.ObjectId, ref: 'Address'},
	createAt: {type: Date},
	updateAt: {type: Date},
	productsPurchased: [{type: Schema.Types.ObjectId, ref: 'Product'}]
});

module.exports = mongoose.model('Customer', CustomerSchema);