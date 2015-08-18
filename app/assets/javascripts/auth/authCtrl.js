angular.module('redbowl')
.controller('AuthCtrl', ['$scope','$state','Auth', function($scope, $state, Auth){
  
  var config = {
    headers: {
      'X-HTTP-Method-Override':'POST'
    }
  }; 
  $scope.signedIn = Auth.isAuthenticated;
  $scope.logout = Auth.logout;

  Auth.currentUser().then(function (user){
    $scope.user = user;
  });

  $scope.$on('devise:new-registration', function (e, user){
    $scope.user = user;
  });

  $scope.$on('devise:login', function (e, user){
    $scope.user = user;
  });

  $scope.$on('devise:logout', function (e, user){
    $scope.user = {};
  });

  $scope.login = function(){
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