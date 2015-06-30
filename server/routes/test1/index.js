'use strict';

var router = require('express').Router(),
	mongoose = require('mongoose'),
	Customer = mongoose.model('Customer'),
	Product = mongoose.model('Product');
	module.exports = router;

	// Get all customers
	router.get('/', function (req, res){
		Customer.find({})
			.exec(function (err, customers) {
				if(err) { return handleError(res, err); }
				res.status(200).json(customers);
			})
	});

	// Create new customer
	router.post('/add-customer', function (req, res) {
		Customer.create(req.body, function(err, customer) {
			if(err) { return handleError(res, err); }
			Customer.findById(customer._id)
				.exec(function(err, customer){
					if(err) { return handleError(res, err); }
					return res.status(201).json(customer);	
				});
		});
	});

	// Update existing customer
	router.put('/update-customer/:id', function (req, res) {
		Customer.findByIdAndUpdate(req.params.id, { $set: req.body}, function (err, customer){
			console.log(err);
			if(err) { return handleError(res, err); }
			Customer.findById(customer._id)
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

