'use strict';

var router = require('express').Router(),
	mongoose = require('mongoose'),
	Customer = mongoose.model('Customer'),
	Product = mongoose.model('Product');
	module.exports = router;

	// Get all customers
	router.get('/', function (req, res){
		console.log("YEAAS");
		Customer.find({})
			.populate('address')
			.populate('productsPurchased')
			.exec(function (err, customers) {
				if(err) { return handleError(res, err); }
				res.status(200).json(customers);
			})
	});

	// Create new customer
	router.post('/add-customer', function (req, res) {
		console.log(req.body)
		Customer.create(req.body, function(err, customer) {
			if(err) { return handleError(res, err); }
			Customer.findById(customer._id)
				.populate('address')
				.exec(function(err, customer){
					if(err) { return handleError(res, err); }
					return res.status(201).json(customer);	
				});
		});
	});

	// Update existing customer
	router.put('/update-customer/:id', function (req, res) {
		Customer.findByIdAndUpdate(req.params.id, { $set: req.body}, function (err, customer){
			if(err) { return handleError(res, err); }
			console.log("UPDATEED", customer)
			Customer.findById(customer._id)
				.populate('address')
				.exec(function(err, customer){
					res.status(200).json(customer);
				});
		});
	});

	// Delete existing customer
	router.delete('/delete-customer/:id', function (req, res){
		Customer.findById(req.params.id, function(err, customer){
			if(err) { return handleError(res, err); }
			if(!customer) { return res.status(404); }
			customer.remove(function(err){
				if(err) { return handleError(res, err); }
				return res.status(204).json('Entry successfully deleted!');
			})
		})

	});

	function handleError(res, err) {
  		return res.status(500).send(err);
	}
	// 	Customer.create({ firstName: "Carlos",
	// 				  lastName: "M",
	// 				  emails: ['test1@test.com, test2@test.com, test3@test.com'],
	// 				  dob: 'n/a',
	// 				  address: {
	// 				  	street1: 'Test Street',
	// 				  	street2: 'Apt 1A',
	// 				  	city: 'New York',
	// 				  	state: 'New York'
	// 				  },
	// 				  createAt: date,
	// 				  updatedAt: date,
	// 				  } , function(err, customer) {
	// 	return res.json(customer);	

	// });
