angular.module('redbowl')
.controller('contestCtrl',  ['$scope', '$state', 'contestService', '$stateParams', function($scope, $state, contestService, $stateParams){
  console.log("$stateParams: ", $stateParams)
  contestService.getContest($stateParams.contest_id).then(function(data){
    $scope.contest = data.info;
    $scope.entries = data.entries; 
  }); 
  // $scope.passed = contest.deadline < new Date();
}]);

