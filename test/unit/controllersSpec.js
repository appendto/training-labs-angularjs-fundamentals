'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function() {
    var Reservations,
        list;

    beforeEach(module('introToAngularApp.controllers'));
    beforeEach(function() {
        list = [];
        Reservations = function() {};
        Reservations.$save = Reservations.prototype.$save = function() {
            list.push({});
            return {
                then: function(fn) {
                    fn();
                }
            }
        };
        Reservations.query = function() {
            return list;
        };
    });


    describe('ReservationsCtrl', function() {
        it('should have a ReservationsCtrl', inject(function($controller, $rootScope) {
            //spec body
            var scope = $rootScope.$new();
            scope.reservations = {};
            scope.reservations.$invalid = false;
            var ReservationsCtrl = $controller('ReservationsCtrl', {
                Reservations: Reservations,
                $scope: scope
            });
            expect(ReservationsCtrl).toBeDefined();
        }));

        it('should create reservations if it\'s valid', inject(function($controller, $rootScope) {
            var scope = $rootScope.$new();
            scope.reservations = {};
            scope.reservations.$invalid = false;

            var ReservationsCtrl = $controller('ReservationsCtrl', {
                Reservations: Reservations,
                $scope: scope
            });

            ReservationsCtrl.date = new Date();
            ReservationsCtrl.time = new Date();
            ReservationsCtrl.createReservation();
            expect(ReservationsCtrl.reservations.length).toBe(1);
        }));

        it('should not reservations if it\'s valid', inject(function($controller, $rootScope) {
            var scope = $rootScope.$new();
            scope.reservations = {};
            scope.reservations.$invalid = true;

            var ReservationsCtrl = $controller('ReservationsCtrl', {
                Reservations: Reservations,
                $scope: scope
            });

            ReservationsCtrl.date = new Date();
            ReservationsCtrl.time = new Date();
            ReservationsCtrl.createReservation();
            expect(ReservationsCtrl.reservations.length).toBe(0);
            expect(ReservationsCtrl.submitted).toBe(true);
        }));

        it('should clear the form', inject(function($controller, $rootScope) {
            var scope = $rootScope.$new();
            scope.reservations = {};
            scope.reservations.$invalid = false;

            var ReservationsCtrl = $controller('ReservationsCtrl', {
                Reservations: Reservations,
                $scope: scope
            });

            ReservationsCtrl.name = "foo";
            ReservationsCtrl.qty = 2;
            ReservationsCtrl.date = new Date();
            ReservationsCtrl.time = new Date();
            ReservationsCtrl.createReservation();
            expect(ReservationsCtrl.reservations.length).toBe(1);

            ReservationsCtrl.clear();
            expect(ReservationsCtrl.name).toBe("");
            expect(ReservationsCtrl.qty).toBe("");
            expect(ReservationsCtrl.date).toBe("");
            expect(ReservationsCtrl.time).toBe("");
        }));
    });
    
    describe('MenuCtrl', function() {
        it('should have a MenuCtrl', inject(function($controller) {
            var MenuCtrl = $controller('MenuCtrl', {
                Menu: {
                    list: function() {
                        return {
                            success: function(fn) {
                                fn([{}, {}, {}])
                            }
                        };
                    }
                }
            });

            expect(MenuCtrl).toBeDefined();
        }));

        it('should have a MenuCtrl', inject(function($controller) {
            var MenuCtrl = $controller('MenuCtrl', {
                Menu: {
                    list: function() {
                        return {
                            success: function(fn) {
                                fn([{}, {}, {}])
                            }
                        };
                    }
                }
            });

            expect(MenuCtrl.list.length).toBe(3);
        }));
    });


    describe('ContactCtrl', function() {
        it('should have a ContactCtrl', inject(function($controller, $rootScope) {
            var scope = $rootScope.$new();

            var ContactCtrl = $controller('ContactCtrl', {
                Mail: {
                    sent: false,
                    send: function(name, email, message) {
                        this.sent = true;
                    }
                },
                $scope: scope
            });

            expect(ContactCtrl).toBeDefined();
        }));

        it('should send a message if the content is valid', inject(function($controller, $rootScope) {
            var Mail =  {
                sent: false,
                send: function(name, email, message) {
                    this.sent = true;
                }
            };

            var scope = $rootScope.$new();
            scope.contactForm = {};
            scope.contactForm.$invalid = false;

            var ContactCtrl = $controller('ContactCtrl', {
                Mail: Mail,
                $scope: scope
            });

            ContactCtrl.name = "foo";
            ContactCtrl.email = "foo@foo.com";
            ContactCtrl.comment = "foo your bar";

            ContactCtrl.send();

            expect(Mail.sent).toBe(true);
        }));
        it('should send a message if the content is valid', inject(function($controller, $rootScope) {
            var Mail =  {
                sent: false,
                send: function(name, email, message) {
                    this.sent = true;
                }
            };

            var scope = $rootScope.$new();
            scope.contactForm = {};
            scope.contactForm.$invalid = true;

            var ContactCtrl = $controller('ContactCtrl', {
                Mail: Mail,
                $scope: scope
            });

            ContactCtrl.name = "foo";
            ContactCtrl.email = "foo@foo.com";
            ContactCtrl.comment = "foo your bar";

            ContactCtrl.send();

            expect(Mail.sent).toBe(false);
        }));
    });
});