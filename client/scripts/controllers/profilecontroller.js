angular.module('capstone')
  .controller('ProfileController', ProfileController)

  function ProfileController($scope){
    $scope.hello = "Hello from profile!"
  }
