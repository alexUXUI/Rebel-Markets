angular.module('capstone', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/');
      $stateProvider.state('primary', {
        templateUrl: 'templates/primary.html',
        controller: 'PrimaryController',
        url: '/'
      }).state('addpost', {
        templateUrl: 'templates/addpost.html',
        controller: 'addpostcontroller',
        url: '/addpost'
      })
      .state('landing', {
        templateUrl: 'templates/landing.html',
        controller: 'LandingController',
        url: '/landing'
      }).state('profile', {
        templateUrl: 'templates/profile.html',
        controller: 'ProfileController',
        url: '/profile'
      }).state('onboard', {
        templateUrl: 'templates/onboard.html',
        controller: 'OnboardController',
        url: '/onboard'
      });
    });
