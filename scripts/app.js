var appModule = angular.module('angularApp', ['ngRoute', 'angularApp.filters']);

appModule.config(function ($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller:'homeController'
        })
        .when('/federation', {
            templateUrl: 'views/federation.html',
            controller: 'federationController'
        })
        .when('/division', {
            templateUrl: 'views/division.html',
            controller: 'divisionController'
        })
        .when('/team', {
            templateUrl: 'views/team.html',
            controller: 'teamController'
        })
        .otherwise({ redirectTo: '/home' });
});