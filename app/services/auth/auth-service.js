(function ()
{
    'use strict';

    /**
     * @ngdoc service
     * @name authExerciseApp.authService
     * @description
     * # authService
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
            return $http({url: '/auth/login', method: 'POST', data:  data, transformRequest: function(data, headersGetter, status){
                console.log('data',data);
                console.log('header',headersGetter);
                console.log('status',status);
                return data;
            }}).then(function (result)
            {
                $cookies.put('token', 'Bearer ' + result.data.token);
                return result.data;
            })
                    .catch(function(error){
                console.log(error);
                $cookies.remove('token');
            });
        }

        function logout(){
            return $http.post('/auth/logout').then(function(response){
                $cookies.remove('token');
                return response.data;
            });

        }

        return {
            login: login, isAuthenticated: isAuthenticated, logout: logout, getToken : getToken
        };

    }

    angular.module('authExerciseApp').factory('AuthService', ['$http', '$cookies', AuthService]);

})();
