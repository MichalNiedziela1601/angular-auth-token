(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name authExerciseApp.controller:MenuController
     * @description
     * # MenuCtrl
     * Controller of the authExerciseApp
     */
    function MenuController(AuthService,User)
    {
        var ctrl = this;
        console.log('Menu Controller!');
        ctrl.user = User;
        ctrl.logout = function(){
            AuthService.logout();
        };
    }

    angular.module('authExerciseApp').controller('MenuController', ['AuthService', 'User', MenuController]);

})();

