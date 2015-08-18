angular.module('redbowl', ['ui.router','templates', 'Devise'])
 .controller('test', function($scope) {
    $scope.msg = 'heya';
  })

.config(['$stateProvider','$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url:'/',
    templateUrl: '/assets/home/_home.html', 
    controller:'homeCtrl'
  })
  .state('login', {
    url:'/login', 
    templateUrl:'/assets/auth/_login.html', 
    controller:'AuthCtrl', 
    onEnter: ['$state', 'Auth', function($state, Auth){
      Auth.currentUser().then(function(){
        $state.go('home');
      })
    }]
  })
  .state('register', {
    url: '/register', 
    templateUrl: '/assets/auth/_register.html', 
    controller:'AuthCtrl', 
    onEnter: ['$state', 'Auth', function($state, Auth){
      Auth.currentUser().then(function(){
        $state.go('home'); 
      })
    }]
  })
  .state('users', {
    url:'/users',
    templateUrl:'/assets/users/_users.html', 
    controller:'allUsersCtrl'
  })
  .state('users.detail', {
    url: '/users/:user_id',
    templateUrl:'/assets/users/_user.html', 
    controller: 'oneUserCtrl'
  })
  .state('contests', {
    url:'/contests',
    templateUrl:'/assets/contests/_contests.html', 
    controller: 'allContestsCtrl'
  })
  .state('contests.detail', {
    url:'/contests/:contest_id',
    templateUrl:'/assets/contests/_contest.html', 
    controller: 'oneContestCtrl'
  })
  .state('entries.detail', {
    url:'/entries/:entries_id',
    templateUrl:'/assets/entries/_entry.html', 
    controller:'/entryCtrl'
  });
 

}]);