angular.module('redbowl', ['ui.router','templates', 'Devise'])

.config(['$stateProvider','$urlRouterProvider', '$httpProvider', 'AuthProvider', 'AuthInterceptProvider', function($stateProvider, $urlRouterProvider, $httpProvider, AuthProvider, AuthInterceptProvider){

  $urlRouterProvider.otherwise('/');

  // add CSRF token to all $http requests
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = angular.element('meta[name=csrf-token]').attr('content');
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
    onEnter: ['$state', 'Auth', function($state, Auth) {
      Auth.currentUser().then(function (){
        $state.go('home');
      })
    }]
  })
  .state('register', {
    url: '/register', 
    templateUrl: '/assets/auth/_register.html', 
    controller:'AuthCtrl', 
    onEnter: ['$state', 'Auth', function($state, Auth) {
      Auth.currentUser().then(function (){
        $state.go('home');
      })
    }]
  })
  // .state('users', {
  //   url:'/users',
  //   templateUrl:'/assets/users/_users.html', 
  //   controller:'allUsersCtrl'
  // })
  // .state('users.detail', {
  //   url: '/users/:user_id',
  //   templateUrl:'/assets/users/_user.html', 
  //   controller: 'oneUserCtrl'
  // })
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