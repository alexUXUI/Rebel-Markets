angular.module('capstone')
  .factory('getUsers', function($http){
    return $http.get('/mainpage').then(function(response){
      var users = response.data.data;
      return users;
    })
  })
