(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name authExerciseApp.controller:AboutController
     * @description
     * # MainCtrl
     * Controller of the authExerciseApp
     */
function HomeController(User){
        var ctrl = this;
        console.log('Home controller!');
        ctrl.user = User;
    }
    angular.module('authExerciseApp').controller('HomeController', ['User', HomeController]);

})();

