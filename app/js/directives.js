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
    .directive('tppNavMenu', function($location, $rootScope) {
        return {
            restrict: 'E',
            scope: {
                items: '='
            },
            templateUrl: '/partials/directives/tppNavMenu.html',
            link: function(scope, el) {
                var path = $location.path().replace('/', ''),
                    shouldBeActive = el.find('[ng-href*="' + path + '"]');

                $rootScope.$on('$routeChangeSuccess', function(event, route) {
                    path = $location.path().replace('/', '');

                    scope.setActive(path);
                });

                scope.setActive = function(path) {
                    shouldBeActive = el.find('[ng-href*="' + path + '"]');

                    el.find('li').removeClass('active');

                    // Set home active if no route found
                    if (!path || !shouldBeActive.length) {
                        el.find('li').eq(0).addClass('active');
                        return;
                    }

                    $(shouldBeActive).closest('li').addClass('active');
                };

                scope.selctedNavItem = scope.items[0];
                scope.goTo = function(url) {
                    $location.path(url);
                };

                if (path && shouldBeActive.length) {
                    scope.setActive(path);   
                } 
            }
        };
    });