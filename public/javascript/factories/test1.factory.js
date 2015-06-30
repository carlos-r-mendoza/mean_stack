module.exports = function($http) {
	return {
		getCustomersInfo: function() {
			return $http.get('api/test1/customers')
				.then(function(response){
					console.log('dat', response.data);
				})
		}
	}
}