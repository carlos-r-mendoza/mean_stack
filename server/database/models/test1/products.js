var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ProductSchema = new Schema({
	name: String,
	category: String,
	price: Number
});

module.exports = mongoose.model('Product', schema);