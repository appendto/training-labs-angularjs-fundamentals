'use strict';

/* Controllers */

angular.module('introToAngularApp.controllers', [])
    .controller('MainCtrl', function ($scope) {
        $scope.title = 'Home';
    })
    .controller('ReservationsCtrl', function(Reservations) {
        var self = this;
        
        this.reservations = Reservations.query();

        this.createReservation = function() {
            var date = new Date(
                    self.date.getFullYear(), 
                    self.date.getMonth(), 
                    self.date.getDate(), 
                    self.time.getHours(), 
                    self.time.getMinutes(), 
                    self.time.getSeconds()
                ),
                reservation = new Reservations({
                    time: new Date(date),
                    qty: self.qty,
                    name: self.name
                });

            reservation.$save().then(function() {
                self.reservations = Reservations.query();
            });
        };
    });
