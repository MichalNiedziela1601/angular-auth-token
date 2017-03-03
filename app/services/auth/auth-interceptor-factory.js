(function ()
{
    'use strict';

    /**
     * @ngdoc factory
     * @name authExerciseApp.authInterceptor
     * @description
     * # authInterceptor
     * Factory in the authExerciseApp.
     */
    function AuthInterceptor($q, $cookies, $injector)
    {
        return {
            request: function (config)
            {

var AuthService = $injector.get('AuthService');
                config.headers = config.headers || {};
                if ($cookies.get('token')) {
                    config.headers.Authorization = 'Bearer ' + $cookies.get('token');
                }
                if(Object.keys(config.headers).length === 0){
                   config.headers = false;
                    AuthService.getToken();

                }
                return config;
            }, responseError: function (rejection)
            {
                if (rejection.status === 401) {
                    // handle the case where the user is not authenticated
                }
                return $q.reject(rejection);
            }

        };
    }

    angular.module('authExerciseApp').factory('AuthInterceptor', AuthInterceptor);

})();
