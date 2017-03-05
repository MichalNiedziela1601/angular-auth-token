(function ()
{
    'use strict';

    function config($stateProvider)
    {
        $stateProvider.state('site', {
            abstract: true,
            views: {
                '@' : {
                    // template: '<ui-view></ui-view>',
                    templateUrl: 'views/site/site.html'
                    // controller: 'AuthenticationController as authController'
                }
            }
            // resolve: {
            //     User: function(AuthService, UserService, $rootScope){
            //         console.log('resolve user rights');
            //         if(AuthService.isAuthenticated()){
            //             $rootScope.authenticated = true;
            //             return UserService.getCurrent();
            //         } else {
            //             $rootScope.authenticated = false;
            //         }
            //     }
            // }

        });
    }

    angular.module('authExerciseApp').config(['$stateProvider', config]);


})();
