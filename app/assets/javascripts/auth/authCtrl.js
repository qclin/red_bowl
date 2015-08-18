angular.module('redbowl')
.controller('AuthCtrl', ['$scope','$state','Auth','$http', function($scope, $state, Auth, $http){

  $scope.login = function(){
    console.log("logIn clicked ");
    Auth.login($scope.user).then(function(response){
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