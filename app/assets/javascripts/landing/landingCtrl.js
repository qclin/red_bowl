angular.module('redbowl')
.controller('landingCtrl', ['$scope', '$state','contestService', 'profileService', '$location', function($scope, $state, contestService, profileService, $location){


  $scope.msg = "landed ~ woo !"

  contestService.getAllContests().then(function(data){
    $scope.contests = data; 
  });


  //// deprecated now using ui-sref 
  // $scope.loadDetail = function(id) {
  //   // $location.path is also okay, using $state.go for ui.router
  //   $state.go('contests.detail', {contest_id: id});
  // }

}]);