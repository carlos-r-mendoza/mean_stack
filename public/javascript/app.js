'use strict';
//CommonJS modules for frontend JavaScript through Browserify
require('../../bower_components/angular');
require('../../bower_components/angular-ui-router/release/angular-ui-router');
// require('./public/javascript/**/*.js');

//initiation of AngularJS application
var app = angular.module('MeanStack', ['ui.router']);
module.exports = app;

app.config(function ($locationProvider, $urlRouterProvider) {
    // This turns off hashbang urls (/#about) and changes it to something normal (/about)
    // There is <base href='/'> tag in index.html that is required for this to work
    $locationProvider.html5Mode(true);
    // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
    $urlRouterProvider.otherwise('main');
});

// AngularJS application files
require('./controllers');
require('./factories');
require('./directives');
// require('./filters');

//config of $stateProvider
app.config(function ($stateProvider) {

	$stateProvider
		.state('main', {
			url: '/',
			templateUrl: 'templates/test1.html',
			controller: 'Test1Controller'
		});
});

//201 for created forms
