'use strict';

/* Directives */


angular.module('introToAngularApp.directives', [])
    .directive('appVersion', ['version',
        function(version) {
            return function(scope, elm, attrs) {
                elm.text(version);
            };
        }
    ])
    .directive('a2DatePicker', function() {
        return {
            restrict: 'AE',
            scope: {
                date: '='
            },
            replace: true,
            template: '<input type="text" placeholder="Date" />',
            link: function(scope, $el) {
                $el.kendoDatePicker({
                    format: "M/d/yyyy",
                    change: function() {
                        scope.date = this.value();
                        scope.$apply();
                    }
                });
            }
        };
    })
    .directive('a2TimePicker', function() {
        return {
            restrict: 'A',
            scope: {
                time: '=',
                start: '@'
            },
            link: function(scope, $el) {
                $el.kendoTimePicker({
                    min: scope.start,
                    change: function() {
                        scope.time = this.value();
                        scope.$apply();
                    }
                });
            }
        };
    });