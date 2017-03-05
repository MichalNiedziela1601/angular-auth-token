(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name authExerciseApp.controller:LoginController
     * @description
     * # LoginCtrl
     * Controller of the authExerciseApp
     */
    function LoginController($state,AuthService)
    {
        var ctrl = this;
        console.log('Login controller!');
        ctrl.login = function(){
            if(ctrl.validate()){
                AuthService.login(ctrl.name, ctrl.password).then(function(){
                    $state.reload();
                });
            }
        };

        ctrl.validate = function(){
            return !!(null != ctrl.name && null != ctrl.password);
        };
    }

    angular.module('authExerciseApp').controller('LoginController',['$state','AuthService', LoginController]);

})();

