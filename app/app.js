(function ()
{
    'use strict';

    /**
     * @ngdoc overview
     * @name authExerciseApp
     * @description
     * # authExerciseApp
     *
     * Main module of the application.
     */
    var app = angular.module('authExerciseApp', ['ngResource', 'ngMockE2E', 'ngCookies']);

    app.config(['$httpProvider', function ($httpProvider)
    {
        $httpProvider.interceptors.push('AuthInterceptor');
    }]);
})();
