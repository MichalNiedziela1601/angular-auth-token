'use strict';

/**
 * @ngdoc function
 * @name authExerciseApp.controller:RegisterController
 * @description
 * # RegisterCtrl
 * Controller of the authExerciseApp
 */
angular.module('authExerciseApp').controller('RegisterController', ['$state','UserService','AuthService',
    function ($state,UserService,AuthService)
{
    console.log('Register controller!');
    var ctrl = this;
    ctrl.login = null;
    ctrl.password = null;
    ctrl.passwordRetype = null;
    ctrl.register = function () {
        if(ctrl.validate()) {
            UserService.register(ctrl.login, ctrl.password).then(function(){
                AuthService.login(ctrl.login,ctrl.password)
                    .then(function(){
                    $state.go('site.main.login',{},{reload: true});
                })
            });
        }
    };

    ctrl.validate = function () {
        if (null != ctrl.login && null != ctrl.password && null != ctrl.passwordRetype) {
            if (ctrl.password === ctrl.passwordRetype) {
                return true;
            }
        }
        return false;
    };


}]);
