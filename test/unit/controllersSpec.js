'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
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


  it('should have a ReservationsCtrl', inject(function($controller) {
    //spec body

    var ReservationsCtrl = $controller('ReservationsCtrl', { 
      Reservations: Reservations
    });
    expect(ReservationsCtrl).toBeDefined();
  }));

  it('should create reservations', inject(function($controller) {
    var ReservationsCtrl = $controller('ReservationsCtrl', { 
      Reservations: Reservations
    });

    ReservationsCtrl.createReservation();
    expect(ReservationsCtrl.reservations.length).toBe(1);
  }));
});
