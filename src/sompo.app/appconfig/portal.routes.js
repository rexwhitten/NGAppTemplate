angular
    .module('sompo.app')
    .config(routesConfig)
    .run(setup);

/** @ngInject */
function routesConfig($stateProvider) {
    // $stateProvider
    //     .state('dashboard', {
    //         url: '/dashboard',
    //         templateUrl: "sompo.app/views/dashboard/dashboard.template.html",
    //         controller: 'dashboardController',
    //         controllerAs: 'vm',
    //         resolve: {
    //             /** @ngInject */
    //             isAuthenticated: function($rootScope,authService) {
    //                 authService.isAuthenticated(['admin', 'external_agent_broker'], null);
    //                   $rootScope.$broadcast('menuChanged', 'menuname');
    //                 return true;
    //             }
    //         }
    //     });
}
/** @ngInject */
function setup(sideMenuService, appScopeService) {
    //add scope for login
    //TODO: change this
    appScopeService.add('policy_service');
    // sideMenuService.add({
    //     name: 'edelivery',
    //     state: 'edelivery',
    //     title: 'eDelivery',
    //     icon: 'fa fa-clock-o fa-lg'
    // });
}
