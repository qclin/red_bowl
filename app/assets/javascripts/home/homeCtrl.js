angular.module('redbowl')
.controller('homeCtrl', ['$scope','$http', function($scope,$http){
  $scope.msg = "testing"; 
  $http.get('/test').success(function(res){
    console.log("test route success", res);
  }).error(function(err){
    console.log("test error: ", err); 
  });
}]);