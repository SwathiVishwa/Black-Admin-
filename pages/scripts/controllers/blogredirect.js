'use strict';

angular.module('mallowtechApp')
    .controller('BlogRedirect', function ($scope, $stateParams, $window) {
        $window.location.href = 'http://blog.mallow-tech.com/' + $stateParams.year + '/' + $stateParams.month + '/' + $stateParams.blogName;
    });
