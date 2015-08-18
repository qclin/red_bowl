angular.module('redbowl')
.controller('AuthCtrl', ['$scope','$state','Auth', function($scope, $state, Auth){
  
  var config = {
    headers: {
      'X-HTTP-Method-Override':'POST'
    }
  }; 

  $scope.login = function(){
    console.log("logIn clicked ");
    Auth.login($scope.user, config).then(function(response){
      console.log(response.data);
      $state.go('home');
    }, function(error){
      console.log("Authentication failed "+ error); 
    }); 
  };

  $scope.register = function(){
    Auth.register($scope.user).then(function(response){
      console.log(response.data);
      $state.go('home');
    }, function(error){
      console.log("Registeration failed "+error);
    }); 
  };

}]);