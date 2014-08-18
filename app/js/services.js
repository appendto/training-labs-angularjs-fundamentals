'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('introToAngularApp.services', [])
    .value('version', '0.1')
    .factory('Reservations', function($resource) {
        return $resource('/api/reservations/:id', {
            id: '@id'
        },
        {
           'update': { method:'PUT' }
        });
    })
    .factory('Menu', function($http) {
        return {
            list: function() {
                return $http({ 
                    url: '/api/items',
                    type: 'GET',
                    cache: true
                });
            }
        };
    })
    .service('Mail', function() {
        this.sent = false;

        this.send = function(name, email, message) {
            console.log("Message has been sent");
            this.sent = true;

            return this.sent;
        };
    });
