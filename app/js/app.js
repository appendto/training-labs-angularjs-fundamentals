'use strict';


// Declare app level module which depends on filters, and services
angular.module('introToAngularApp', [
	'ngRoute',
	'ngResource',
	'ngAnimate',
	'ngCookies',
	'introToAngularApp.directives',
	'introToAngularApp.controllers',
	'introToAngularApp.services',
	'introToAngularApp.filters'
])
.config(['$routeProvider', 'NavigationProvider', function($routeProvider, NavigationProvider) {
	NavigationProvider.setNavigation([{
        url: '/',
        title: 'Home'
    }, {
        url: '/menu',
        title: 'Menu'
    }, {
        url: '/contact',
        title: 'Contact'
    }, {
        url: '/reservations',
        title: 'Reservations'
    }]);

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
			controllerAs: 'vm',
			resolve: {
				list: function(Menu, $q) {
					var dfd = $q.defer();

					Menu.list().success(function(data) {
						dfd.resolve(data);
					});

					return dfd.promise;
				}
			}
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
