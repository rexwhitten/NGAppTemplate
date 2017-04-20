(function() {
    'use strict';

    angular
        .module('sompo.app')
        .controller('dashboardController', dashboardController);

    /** @ngInject */
    function dashboardController($rootScope, envService) {
        var vm = this;
        $rootScope.$broadcast('menuChanged', 'dashboard');
        vm.cdn = envService.read('cdn');
    }
})();
