angular.module('capstone')
  .controller('AddCollectionController', AddCollectionController)

  function AddCollectionController($scope, getUsers){
    $scope.yo = "Hello from add a collection!"
  }
