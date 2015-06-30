module.exports = function($http) {
	return {
		getCustomers: function() {
			return $http.get('api/test1')
				.then(function(response){
					return response.data;
				})
		}, 
		addCustomer: function(customer) {
			return $http.post('api/test1/add-customer', customer)
				.then(function(response){
					return response.data;
				})
		},
		updateCustomer: function(customer) {
			return $http.put('api/test1/update-customer/' + customer._id, customer)
				.then(function(response){
					return response.data;
				})
		},
		deleteCustomer: function(customerId) {
			return $http.delete('api/test1/delete-customer/' + customerId)
				.then(function(response){
					console.log('he',response)
					return response;
				});
		}
	}
}