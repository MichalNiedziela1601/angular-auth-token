(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name authExerciseApp.controller:MenuController
     * @description
     * # MenuCtrl
     * Controller of the authExerciseApp
     */
    function MenuController($state,AuthService,User,UserService)
    {
        var ctrl = this;
        console.log('Menu Controller!');
        // ctrl.username = UserService.getCurrent();
        // ctrl.user = User;
        UserService.getCurrent().then(function(result){
            ctrl.user = result;
        });
        ctrl.logout = function(){
            AuthService.logout().then(function(){
                $state.go('site.auth.login', {}, {reload: true});
            });


        };
    }

    angular.module('authExerciseApp').controller('MenuController', ['$state','AuthService', 'User','UserService', MenuController]);

})();

