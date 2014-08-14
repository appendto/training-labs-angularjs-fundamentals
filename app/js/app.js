'use strict';


// Declare app level module which depends on filters, and services
angular.module('introToAngularApp', [
  'ngRoute',
  'ngResource',
  'introToAngular.services'
]).
config(['$routeProvider', function($routeProvider) {
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
        });
  // $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  // $routeProvider.otherwise({redirectTo: '/view1'});
}]);
