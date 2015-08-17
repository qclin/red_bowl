angular.module('redbowl', ['ui.router','templates', 'Devise'])
 .controller('test', function($scope) {
    $scope.msg = 'heya';
  })

.config(['$stateProvider','$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url:'/',
    templateUrl: 'home/_home.html', 
    controller:'homeCtrl'
  })
  .state('login', {
    url:'/login', 
    templateUrl:'auth/_login.html', 
    controller:'AuthCtrl', 
    onEnter: ['$state', 'Auth', function($state, Auth){
      Auth.currentUser().then(function(){
        $state.go('home');
      })
    }]
  })
  .state('register', {
    url: '/register', 
    templateUrl: 'auth/_register.html', 
    controller:'AuthCtrl', 
    onEnter: ['$state', 'Auth', function($state, Auth){
      Auth.currentUser().then(function(){
        $state.go('home'); 
      })
    }]
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