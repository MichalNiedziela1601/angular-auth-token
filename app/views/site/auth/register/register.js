(function ()
{
    'use strict';

    angular.module('authExerciseApp').config(['$stateProvider', function ($stateProvider)
    {
        $stateProvider.state('site.register', {
            url: '/register',
            views: {
                'no-auth@site': {
                    templateUrl: 'views/site/auth/register/register.html',
                    controller: 'RegisterController as registerCtrl'
                },
                '@site.main' : {
                    templateUrl: 'views/site/auth/main/home/home.html',
                    controller: 'HomeController as homeCtrl'
                }
            }
        });
    }]);
})();
