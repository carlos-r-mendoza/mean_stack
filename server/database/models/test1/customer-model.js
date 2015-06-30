'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CustomerSchema = new Schema({
	firstName: String,
	lastName: String,
	emails: [String],
	dob: String,
	address: [AddressSchema],
	createAt: {type: Date},
	updateAt: {type: Date},
	productsPurchase: {type: Schema.Types.ObjectId, ref: 'User'}
});

var AddressSchema = new Schema({
	street1: String,
	street2: String,
	city: String,
	state: String
});

module.exports = mongoose.model('Customer', CustomerSchema);