'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('introToAngular.services', [])
    .value('version', '0.1')
    .factory('Reservations', function($resource) {
        return $resource('/api/reservations/:id');
    });
