'use strict';

var router = require('express').Router(),
	mongoose = require('mongoose'),
	Customer = mongoose.model('Customer'),
	Product = mongoose.model('Product');
	module.exports = router;

	router.get('/customers', function (req, res, next){
		console.log("YEAAS");

		var date = new Date();
		Customer.create({ firstName: "Carlos",
						  lastName: "M",
						  emails: ['test1@test.com, test2@test.com, test3@test.com'],
						  dob: 'n/a',
						  address: {
						  	street1: 'Test Street',
						  	street2: 'Apt 1A',
						  	city: 'New York',
						  	state: 'New York'
						  },
						  createAt: date,
						  updatedAt: date,
						  } , function(err, customer) {
			return res.json(customer);	

		});
		// res.status(200).send('hello');
		// next();
	});
