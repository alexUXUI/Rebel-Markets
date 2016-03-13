angular.module('capstone')
  .controller('AddPostController', LandingController)

  function LandingController($scope){
    $scope.hello = "Hello from add post"
  }
