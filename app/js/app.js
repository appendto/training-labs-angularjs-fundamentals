'use strict';


// Declare app level module which depends on filters, and services
angular.module('introToAngularApp', [
	'ngRoute',
	'ngResource',
	'introToAngularApp.directives',
	'introToAngularApp.controllers',
	'introToAngularApp.services'
]).
config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'partials/main.html',
				controller: 'MainCtrl',
				controllerAs: 'vm'
			})
			.when('/reservations', {
				templateUrl: 'partials/reservations.html',
				controller: 'ReservationsCtrl',
				controllerAs: 'vm'
			})
			.otherwise({
				redirectTo: '/'
			});
	}
]);