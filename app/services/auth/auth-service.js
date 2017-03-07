(function ()
{
    'use strict';

    /**
     * @ngdoc service
     * @name authExerciseApp.authService
     * @description
     * # AuthService
     * Service in the authExerciseApp.
     */
    function AuthService($http, $cookies)
    {

        function getToken(){
            return $cookies.get('token');
        }

        function isAuthenticated()
        {
            return $cookies.get('token') ? true : false;

        }

        function login(name, password)
        {
            var data = JSON.stringify({name: name, password: password});
            return $http.post('/auth/login', data).then(function (result)
            {

                $cookies.put('token', result.data.token);
                return result.data;
            })
                .catch(function(error){
                    console.log(error);
                    $cookies.remove('token');
                });
        }

        function logout(){
            return $http.post('/auth/logout').then(function(){
                $cookies.remove('token');

            });

        }

        return {
            login: login, isAuthenticated: isAuthenticated, logout: logout, getToken : getToken
        };

    }

    angular.module('authExerciseApp').factory('AuthService', ['$http', '$cookies', AuthService]);

})();
