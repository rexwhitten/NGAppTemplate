(function () {
  angular
    .module('sompo.app')
    .config(routesConfig)
    .run(setup);

  /** @ngInject */
  function routesConfig($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: "sompo.app/views/dashboard/dashboard.template.html",
        controller: 'dashboardController',
        controllerAs: 'vm',
        resolve: {
          /** @ngInject */
          isAuthenticated: function ($rootScope, authService) {
            var response = authService.isAuthenticated('admin', 'external_agent_broker', null);
            if (response === true) {
              $rootScope.$broadcast('menuChanged', 'dashboard');
            } else {
              window.location = '/login';
            }
            return response;
          }
        }
      });
  }
  /** @ngInject */
 function setup($rootScope, sideMenuService, authService) {
    var menu = {
      name: 'edelivery',
      state: 'edelivery',
      title: 'eDelivery',
      icon: 'fa fa-clock-o fa-lg'
    };
    $rootScope.$on('loggedIn', function (event, data) {
      var response = authService.isAuthenticated(null, null);
      if (response === true) {
        sideMenuService.add(menu);
      }
    });
    $rootScope.$on('sideMenuReady', function (event, data) {
      var response = authService.isAuthenticated(null, null);
      if (response === true) {
        sideMenuService.add(menu);
      }
    });

  }

})();
