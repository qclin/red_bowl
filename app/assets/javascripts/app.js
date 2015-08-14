angular.module('redBowl', ['ui.router','ngResource','templates'])
.config(['$stateProvider','$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouteProvider, $httpProvider){

  $urlRouterProvider.otherwise('home');

  $stateProvider
  .state('home', {
    url:'#/',
    templateUrl: 'home/_home.html', 
    controller:'homeCtrl'
  })
  .state('users', {
    url:'/users',
    templateUrl:'users/_users.html', 
    controller:'allUsersCtrl'
  })
  .state('users.detail', {
    url: '/users/:user_id',
    templateUrl:'users/_user.html', 
    controller: 'oneUserCtrl'
  })
  .state('contests', {
    url:'/contests',
    templateUrl:'contests/_contests.html', 
    controller: 'allContestsCtrl'
  })
  .state('contests.detail', {
    url:'/contests/:contest_id',
    templateUrl:'contests/_contest.html', 
    controller: 'oneContestCtrl'
  })
  .state('entries.detail', {
    url:'/entries/:entries_id',
    templateUrl:'entries/_entry.html', 
    controller:'/entryCtrl'
  }); 

}]);
