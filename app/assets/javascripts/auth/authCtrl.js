angular.module('redbowl')
.controller('AuthCtrl', ['$scope','$state','Auth', function($scope, $state, Auth){
  
  var config = {
    headers: {
      'X-HTTP-Method-Override':'POST'
    }
  }; 

  $scope.login = function(){
    Auth.login($scope.user, config).then(function(user){
      console.log(user);
    }, function(error){
      console.log("Authentication failed "+ user); 
    }); 
  };

  $scope.register = function(){
    Auth.register($scope.user).then(function(){
    }); 
  };

}]);