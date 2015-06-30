module.exports = function($scope, Test1Factory) {
	console.log('Hereeee');
	Test1Factory.getCustomersInfo()
		.then(function(info){
			console.log('INFO!', info);
		})
}