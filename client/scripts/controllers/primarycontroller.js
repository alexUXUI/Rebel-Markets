angular.module('capstone')
  .controller('PrimaryController', PrimaryController)

  function PrimaryController($scope, getUsers){

    getUsers.then(function(users){
      $scope.realUsers = users;
      console.log($scope.realUsers)
    })

    $scope.hello = "Hello from primary!"
  }
