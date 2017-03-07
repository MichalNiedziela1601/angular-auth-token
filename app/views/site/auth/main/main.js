(function ()
{
    'use strict';


    function config($stateProvider)
    {
        $stateProvider.state('site.main.login',{
            url: '/', views: {
                '@site.main': {
                    templateUrl: 'views/site/auth/main/home/home.html',
                    controller: 'HomeController as homeCtrl'
                }
            }
        });
    }

    angular.module('authExerciseApp').config(['$stateProvider', config]);

})();
