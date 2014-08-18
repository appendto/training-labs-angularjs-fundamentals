'use strict';

/* Controllers */

angular.module('introToAngularApp.controllers', [])
    .controller('MainCtrl', function ($scope) {
        $scope.title = 'Home';
    })
    .controller('ReservationsCtrl', function(Reservations, $scope, $filter) {
        var self = this;

        // For create and update
        this.reservation = {};
        
        // Get list
        this.reservations = Reservations.query();

        // Create a reservation on button click
        this.createReservation = function() {
            var date, reservation;

            if (!$scope.reservations.$invalid) {
                date = new Date(self.reservation.date + " " + self.reservation.time);

                if (!self.reservation.id) {
                        reservation = new Reservations({
                            time: new Date(date),
                            qty: self.reservation.qty,
                            name: self.reservation.name
                        });

                    reservation.$save().then(function() {
                        self.reservations = Reservations.query();
                    });
                }
                else {
                    Reservations.update({
                        id: self.reservation.id,
                        time: new Date(date),
                        qty: self.reservation.qty,
                        name: self.reservation.name
                    }, function() {
                        self.reservations = Reservations.query();
                    });
                }
                

                // Help with validation
                this.submitted = false;

                this.clear();
            }
            else {
                this.submitted = true;
            }
        };

        this.edit = function(id) {
            Reservations.get({
                id: id
            }, function(reservation) {
                self.reservation.id = reservation.id;
                self.reservation.name = reservation.name;
                self.reservation.qty = +reservation.qty;
                self.reservation.date = $filter('date')(reservation.time, 'shortDate');
                self.reservation.time = $filter('date')(reservation.time, 'shortTime');
            });
        };

        this.remove = function(id) {
            Reservations.remove({
                id: id
            }, function() {
                self.reservations = Reservations.query();

                self.clear();
            });
        };

        this.clear = function() {
            self.reservation.id = "";
            self.reservation.name = "";
            self.reservation.qty = "";
            self.reservation.time = "";
            self.reservation.date = "";
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
