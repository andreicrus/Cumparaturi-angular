var listApp = angular.module('listAppControllers', [
    'ngRoute',
    'listAppControllers'
]);

listApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                controller: 'ProductCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);


