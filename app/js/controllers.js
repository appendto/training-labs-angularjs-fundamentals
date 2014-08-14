'use strict';

/* Controllers */

angular.module('introToAngularApp')
    .controller('MainCtrl', function ($scope) {
        $scope.title = 'Home';
    })
    .controller('ReservationsCtrl', function(Reservations) {
        var self = this;
        
        this.reservations = Reservations.query();

        this.createReservation = function() {
            var reservation = new Reservations({
                time: new Date(self.date + ' ' + self.time),
                qty: self.qty,
                name: self.name
            });

            reservation.$save().then(function() {
                self.reservations = Reservations.query();
            });
        };
    });
