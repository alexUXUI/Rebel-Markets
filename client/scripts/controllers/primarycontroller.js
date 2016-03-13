angular.module('capstone')
  .controller('PrimaryController', PrimaryController)

  function PrimaryController($scope){
    $scope.hello = "Hello from primary!"
  }
