(function () {
    'use strict';
    // Add 'ngRoute' or 'ui.router' based on router using
    angular.module('myApp', ['ngRoute','ngSanitize'])
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider
            .when('/', {
                    templateUrl: 'madlib/madlib.html',
                    controller: 'madlibController',
                    controllerAs: 'vm'
                })
               .when('/about', {
                    templateUrl: 'about/about.html'
               }) 
                .otherwise({redirectTo:'/'});
        })

})();