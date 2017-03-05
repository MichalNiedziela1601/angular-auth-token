(function ()
{
    'use strict';

    function config($stateProvider)
    {
        $stateProvider.state('site.auth',{
            abstract: true,
            views: {
                '@site' : {
                    template: '<ui-view></ui-view>',
                    controller: 'AuthenticationController as authController'
                },

                'no-auth@site' : {
                    templateUrl: 'views/site/auth/main/main.html',
                    controller: 'LoginController as loginCtrl'
                },
                'menu@site' : {
                    templateUrl: 'views/site/auth/menu/menu.html',
                    controller: 'MenuController as menuCtrl'
                }
            },
            resolve: {
                User: function(AuthService, UserService, $rootScope){
                    if(AuthService.isAuthenticated()){

                        $rootScope.authenticated = true;

                        return UserService.getCurrent();
                    } else {
                        $rootScope.authenticated = false;
                    }
                }
            }
        });
    }
    angular.module('authExerciseApp')
    .config(['$stateProvider', config]);

})();
