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
            restrict: 'A',
            link: function(scope, $el) {
                $el.kendoDatePicker({
                    format: "M/d/yyyy",
                    min: new Date(),
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
            link: function(scope, $el, attrs) {
                $el.kendoTimePicker({
                    min: attrs.start,
                    change: function() {
                        scope.time = this.value();
                        scope.$apply();
                    }
                });
            }
        };
    })
    .directive('tppNavMenu', function($location) {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/partials/directives/tppNavMenu.html',
            link: function(scope, el) {
                var path = $location.path().replace('/', ''),
                    shouldBeActive = el.find('[ng-href*="' + path + '"]');

                if (path && shouldBeActive.length) {
                    el.find('li').removeClass('active');

                    shouldBeActive.closest('li').addClass('active');    
                }    

                scope.setActive = function(element) {
                    el.find('li').removeClass('active');

                    $(element).closest('li').addClass('active');
                };
            }
        };
    });