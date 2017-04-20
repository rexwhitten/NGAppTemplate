angular
    .module('sompo.app')
    .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: "sompo.app/views/dashboard/dashboard.template.html",
            controller: 'dashboardController',
            controllerAs: 'vm',
            resolve: {
                /** @ngInject */
                isAuthenticated: function(authService) {
                    authService.isAuthenticated(['admin', 'external_agent_broker'], null);
                    return true;
                }
            }
        });
}
