var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'mainController', 
      templateUrl: 'views/main.html' 
    })
    .when('/calibration', {
      controller: 'calibrationController', 
      templateUrl: 'views/calibration.html' 
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
});