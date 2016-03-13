angular.module('capstone')
  .controller('PrimaryController', LandingController)

  function LandingController($scope){
    $scope.hello = "Hello from primary!"
  }
