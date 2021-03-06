angular.module('capstone', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/');
      $stateProvider.state('primary', {
        templateUrl: 'templates/primary.html',
        controller: 'PrimaryController',
        url: '/:id'
      }).state('addpost', {
        templateUrl: 'templates/addcollection.html',
        controller: 'AddCollectionController',
        url: '/addcollection/:id'
      })
      .state('landing', {
        templateUrl: 'templates/landing.html',
        controller: 'LandingController',
        url: '/landing'
      }).state('profile', {
        templateUrl: 'templates/profile.html',
        controller: 'ProfileController',
        url: '/profile/:id'
      }).state('onboard', {
        templateUrl: 'templates/onboard.html',
        controller: 'OnboardController',
        url: '/onboard/:id'
      });
    });
