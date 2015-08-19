angular.module('redbowl')
.controller('landingCtrl', ['$scope', '$state','contestService', 'profileService', function($scope, $state, contestService, profileService){

  // $scope.contest = contestService.getContest(); 
  // $scope.profile = profileService.getProfile(); 

  $scope.msg = "landed ~ woo !"
}]);