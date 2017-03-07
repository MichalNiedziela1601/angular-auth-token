(function ()
{
    'use strict';

    function config($stateProvider){
        $stateProvider.state('site.main.about', {
            url: '/about',
            views: {
                '@site.main' : {
                    templateUrl: 'views/site/auth/main/about/about.html',
                    controller: 'AboutController as aboutCtrl'
                }
            }
        });
    }

    angular.module('authExerciseApp')
            .config(['$stateProvider',config]);

})();
