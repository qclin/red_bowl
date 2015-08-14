angular.module('redBowl', ['ui.router','authInterceptor','main'])
.config(['$routeProvider', '$httpProvider',function($stateProvider, $urlRouteProvider){
  $httpProvider.interceptors.push('authInterceptor'); 

  $routeProvider
  .when('/', {
    templateUrl: '/home.html'
  })
  .when('/users', {
    templateUrl:'/users.html'
  })
  .when('/users/:user_id', {
    templateUrl:'/user.html'
  })
  .when('/contests', {
    templateUrl:'/contests.html'
  })
  .when('/contests/:contest_id', {
    templateUrl:'/contest.html'
  })
  .when('/entries/:entries_id', {
    templateUrl:'/entry.html'
  })
  .otherwise({
    redirectTo:'/'
  })

}]);
