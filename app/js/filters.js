'use strict';

/* Filters */

angular.module('introToAngularApp.filters', [])
    .filter('interpolate', ['version',
        function(version) {
            return function(text) {
                return String(text).replace(/\%VERSION\%/mg, version);
            };
        }
    ])
    .filter('reserveStatus', function() {
        return function(num) {
            var klass = "";

            num = parseInt(num, 10);

            if (num > 2 && num < 5) {
                klass = "alert-success";
            }                    
            else if (num >= 5 && num < 10) {
                klass = "alert-warning";
            }
            else if (num >= 10) {
                klass = "alert-danger";
            }

            return klass;
        }
    });