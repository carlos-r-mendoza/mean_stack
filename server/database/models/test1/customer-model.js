'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CustomerSchema = new Schema({
	firstName: String,
	lastName: String,
	email: String,
	phones: [String],
	address: {
	street1: String,
	street2: String,
	city: String,
	state: String
	},
	createdAt: {type: Date},
	updatedAt: {type: Date}
	// productsPurchased: [{type: Schema.Types.ObjectId, ref: 'Product'}]
});

module.exports = mongoose.model('Customer', CustomerSchema);