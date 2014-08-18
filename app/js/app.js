'use strict';


// Declare app level module which depends on filters, and services
angular.module('introToAngularApp', [
	'ngRoute',
	'ngResource',
	'ngAnimate',
	'ngCookies',
	'ngMessages',
	'introToAngularApp.directives',
	'introToAngularApp.controllers',
	'introToAngularApp.services',
	'introToAngularApp.filters'
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
			.when('/menu', {
				templateUrl: 'partials/menu.html',
				controller: 'MenuCtrl',
				controllerAs: 'vm'
			})
			.when('/contact', {
				templateUrl: 'partials/contact.html',
				controller: 'ContactCtrl',
				controllerAs: 'vm'
			})
			.otherwise({
				redirectTo: '/'
			});
	}
]);