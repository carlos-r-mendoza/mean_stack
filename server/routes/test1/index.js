'use strict';

var router = require('express').Router();
	// mongoose = require('mongoose'),
	// Customer = mongoose.model('Customer'),
	// Product = mongoose.model('Product');
	module.exports = router;

	router.get('/customers', function (req, res, next){
		console.log("YEAAS");
		res.send(200, "{ name: 'Carlos' }");
		next();
	});
