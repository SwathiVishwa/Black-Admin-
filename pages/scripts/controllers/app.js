'use strict';

/**
 * @ngdoc function
 * @name applicationApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the applicationApp
 */
angular.module('mallowtechApp')
    .controller('AppCtrl', function ($scope, $state, $rootScope, $window) {
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){ 
            $scope.loading = true;
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        });
        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
                $scope.loading = false;
                $('div#bs-example-navbar-collapse-1').removeClass('in');

                if($state.current.name == "app.blog-redirect-without-date" || $state.current.name == "app.blog-redirect") { //For blog redirection show the loading spinner
                    $scope.loading = true;
                }
            });


});
