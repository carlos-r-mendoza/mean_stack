'use strict';

module.exports = function($scope, Test1Factory) {

	$scope.customer = {};
	$scope.originalCustomers = {};
	
	// obtains all existing customers when controller is loaded
	Test1Factory.getCustomers()
		.then(function(customers){
			console.log(customers)
			$scope.customers = customers;
			// this creates a copy of the customers data, not a reference
			$scope.originalCustomers = angular.copy($scope.customers);
		});

	// two-way data binding for new customer info
	$scope.newCustomer = {};

	// adds new customer
	$scope.addCustomer = function(customer) {
		customer.createdAt = new Date();
		Test1Factory.addCustomer(customer)
			.then(function(addedCustomer){
				// adds new customer to Existing Customers in the view
				$scope.customers.push(addedCustomer);
				// clears form when submitted
				$scope.newCustomer = {};
			})		
	};

	// updates existing customer
	$scope.updateCustomer = function(customer) {
		customer.updatedAt = new Date();
		Test1Factory.updateCustomer(customer)
			.then(function(updatedCustomer){
				customer = updatedCustomer;
			});
	};

	// delete existing customer
	$scope.deleteCustomer = function(customerId, indx) {
		Test1Factory.deleteCustomer(customerId)
			.then(function(){
				// removes customer from the view
				$scope.customers.splice(indx, 1);
			});
	};

	// hides search bar when controller is loaded
	$scope.searchBar = false;
	// sets column size when controller is loaded
	$scope.colSize = 6;

	$scope.modifyColSize = function() {
		// shows/hides search input
		$scope.searchBar = !$scope.searchBar;
		// makes columns in view dynamic
		if($scope.searchBar) {
			$scope.colSize = 12;
		} else {
			$scope.colSize = 6;
		}
	};

	// for search filter
	$scope.search = { query: "" }

    $scope.isStatus = function(query){
      return function(el){
        var keys = Object.keys(query);
        if(keys.length === 0) return true;
        return dotNotationValue(el,keys[0]) == query[keys[0]];
      }
    }

    function dotNotationValue(obj, str){
      var query = str.split('.');
      var testing = _.clone(obj, true);
      for(var i = 0; i < query.length; i++){
        if(!testing) return testing;
        testing = testing[query[i]];
      }
      return testing;
    }
}