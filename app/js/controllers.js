'use strict';

/* Controllers */

angular.module('introToAngularApp.controllers', [])
    .controller('MainCtrl', function ($scope) {
        $scope.title = 'Home';
    })
    .controller('ReservationsCtrl', function(Reservations, $scope) {
        var self = this;
        
        this.reservations = Reservations.query();

        this.createReservation = function() {
            if (!$scope.reservations.$invalid) {
                var date = new Date(self.date + " " + self.time),
                    reservation = new Reservations({
                        time: new Date(date),
                        qty: self.qty,
                        name: self.name
                    });

                reservation.$save().then(function() {
                    self.reservations = Reservations.query();
                });

                this.submitted = false;
            }
            else {
                this.submitted = true;
            }
        };

        this.clear = function() {
            self.name = "";
            self.qty = "";
            self.time = "";
            self.date = "";
        };
    })
    .controller('MenuCtrl', function(Menu) {
        var self = this;

        Menu.list().success(function(items) {
            self.list = items;
        });
    })
    .controller('ContactCtrl', function(Mail, $scope) {
        this.sent = Mail.sent;

        this.send = function(name, email, comment) {
            if (!$scope.contactForm.$invalid) {
                this.sent = Mail.send(name, email, comment);    
                this.submitted = false;
            }
            else {
                this.submitted = true;
            }
        };

        this.clear = function() {
            this.name = "";
            this.email = "";
            this.comment = "";
        };
    });
