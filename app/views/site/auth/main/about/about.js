(function ()
{
    'use strict';

    function config($stateProvider){
        $stateProvider.state('site.auth.about', {
            url: '/about',
            views: {
                '@site.auth' : {
                    templateUrl: 'views/site/auth/main/about/about.html',
                    controller: 'AboutController as aboutCtrl'
                }
            }
        });
    }

    angular.module('authExerciseApp')
            .config(['$stateProvider',config]);

})();
