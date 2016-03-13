angular.module('capstone')
  .controller('OnboardController', LandingController)

  function LandingController($scope){
    $scope.hello = "Hello from onboard"
  }
