(function ()
{
    'use strict';


    function config($stateProvider)
    {
        $stateProvider.state('site.auth.login',{
            url: '/', views: {
                '@site.auth': {
                    templateUrl: '/views/site/auth/main/home/home.html',
                    controller: 'LoginController as loginCtrl'
                }
            }
        });
    }

    angular.module('authExerciseApp').config(['$stateProvider', config]);

})();
