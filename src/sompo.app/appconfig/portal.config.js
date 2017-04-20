angular
    .module('sompo.app')
    .config(performanceConfig)
    .config(storageConfig)
    .config(whiteListConfig)
    .config(environmentConfig)
    .config(httpConfig);

/** @ngInject */
function performanceConfig($compileProvider, $httpProvider) {
    $compileProvider.debugInfoEnabled(false);
    $compileProvider.commentDirectivesEnabled(false);
    $compileProvider.cssClassDirectivesEnabled(false);
    $httpProvider.useApplyAsync(true);

}

/** @ngInject */
function httpConfig($httpProvider, $localStorageProvider) {
    $httpProvider.interceptors.push(function() {
        return {
            'request': function(config) {
                var sima = $localStorageProvider.get('sima');
                if (_.isNil(sima)) {
                    return config;
                }
                config.headers['Authorization'] = 'Bearer ' + sima;
                return config;
            }
        };
    });
}

/** @ngInject */
function whiteListConfig($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        '127.0.0.1',
        'localhost',
        '10.12.30.223'
    ]);
}

/** @ngInject */
function storageConfig($localStorageProvider) {
    $localStorageProvider.setKeyPrefix('__');
}

/** @ngInject */
function environmentConfig(envServiceProvider) {
    // set the domains and variables for each environment
    envServiceProvider.config({
        domains: {
            local: ['localhost'],
            development: ['10.12.30.220'],
            qa: ['qaportal.sompo-usa.com'],
            production: ['portal.sompo-usa.com']
        },
        vars: {
            local: {
                policy: "10.12.30.220/policy",
                sim: "10.12.30.220/sim",
                whitelist: ['127.0.0.1', '10.12.30.220'],
                cdn: '//10.12.30.222/cdn/dev/'
            },
            development: {
                policy: "10.12.30.220/policy",
                sim: "10.12.30.220/sim",
                whitelist: ['127.0.0.1', '10.12.30.220'],
                cdn: '//10.12.30.222/cdn/dev/'
            },
            qa: {
                policy: "qaapi.sompo-us.com/policy",
                sim: "qaapi.sompo-us.com/sim",
                whitelist: ['127.0.0.1', '10.12.30.220'],
                cdn: '//10.12.30.222/cdn/qa/'
            },
            production: {
                policy: "api.sompo-us.com/policy",
                sim: "api.sompo-us.com/sim",
                whitelist: ['127.0.0.1', '10.12.30.220'],
                cdn: '//10.12.30.222/cdn/prod/'
            }
        }
    });

    envServiceProvider.check();
}
