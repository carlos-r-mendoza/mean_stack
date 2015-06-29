'use strict';
//CommonJS modules for frontend JavaScript through Browserify
require('angular/angular');
require('angular-ui-router/release/angular-ui-router');
//require('./public/javascript/**/*.js');

//initiation of AngularJS application
var app = angular.module('MeanStack', ['ui.router']);

app.config(function ($locationProvider, $urlRouterProvider) {
    // This turns off hashbang urls (/#about) and changes it to something normal (/about)
    // There is <base href='/'> tag in index.html that is required for this to work
    $locationProvider.html5Mode(true);
    // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
    $urlRouterProvider.otherwise('main');
});

//config of $stateProvider
app.config(function ($stateProvider) {

	$stateProvider
		.state('main', {
			url: '/',
			templateUrl: 'templates/main.html',
			controller: 'MainController'
		});
});
console.log("HERE")


app.controller('MainController', function($scope){
	console.log('here');
})