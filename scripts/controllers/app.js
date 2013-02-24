angular.module('myWebsite', []).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/resume', {templateUrl: 'pages/resume.html'}).
      when('/projects', {templateUrl: 'pages/projects.html'}).
      otherwise({redirectTo: '/index'});
}]);