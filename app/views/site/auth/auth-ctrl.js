(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name authExerciseApp.controller:AuthenticationController
     * @description
     * # AuthCtrl
     * Controller of the authExerciseApp
     */

    function AuthenticationController(User)
    {
        var ctrl = this;
        console.log('Auth controller!');
        ctrl.user = User;
    }

    angular.module('authExerciseApp')
            .controller('AuthenticationController',['User',AuthenticationController]);

})();

