var app = angular.module('erp',['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/error');
    $stateProvider
    .state('home',{
        url : '/home',
        templateUrl : 'views/home.html'
        // controller : 'homeController'
    })
    .state('about',{
        url : '/about',
        templateUrl : 'views/about.html'
    })
    .state('error',{
        url : '/error',
        templateUrl : 'views/error.html'
    })
})