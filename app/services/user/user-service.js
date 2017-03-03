(function ()
{
    'use strict';

    /**
     * @ngdoc service
     * @name authExerciseApp.userService
     * @description
     * # userService
     * Service in the authExerciseApp.
     */

    function UserService($http, $cookies){

        function register(name, password){
            var data = JSON.stringify({ name: name, password: password});
            return $http.post('/user/register',data).then(function(response){
                $cookies.put('token', 'Bearer '+response.data.token);

                return response.data;
            });
        }

        function getCurrent(){
            return $http.get('/user/current').then(function(response){
                return response.data;
            });
        }
        return {
            register : register,
            getCurrent: getCurrent
        };
    }
    angular.module('authExerciseApp')
            .factory('UserService',['$http', '$cookies',UserService]);
    
})();
