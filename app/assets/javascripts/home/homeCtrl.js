angular.module('redbowl')
.controller('homeCtrl', ['$scope','$http', function($scope,$http){

  $http.get('/test').success(function(res){
    console.log("test route success", res);
  }).error(function(err){
    console.log("test error: ", err); 
  });
}]);