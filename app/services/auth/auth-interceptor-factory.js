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
    function AuthInterceptor($q, $cookies)
    {
        return {
            request: function (config)
            {


                config.headers = config.headers || {};
                if ($cookies.get('token')) {
                    config.headers.Authorization = 'Bearer ' + $cookies.get('token');
                }
                if(Object.keys(config.headers).length === 0){
                   config.headers = false;

                }
                return config;
            }, responseError: function (rejection)
            {
                if (rejection.status === 401) {
                    // handle the case where the user is not authenticated
                    console.log(rejection);
                }
                return $q.reject(rejection);
            }

        };
    }

    angular.module('authExerciseApp').factory('AuthInterceptor', AuthInterceptor);

})();
