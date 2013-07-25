angular.module('myWebsite', []).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/about', {templateUrl: 'pages/about.html'}).
      when('/resume', {templateUrl: 'pages/resume.html'}).
      when('/work', {templateUrl: 'pages/work.html'}).
      when('/projects', {templateUrl: 'pages/projects.html'}).
      when('/contact', {templateUrl: 'pages/contact.html'}).
      otherwise({redirectTo: '/index'});
}]).run(['$rootScope', '$timeout', '$routeParams', function($rootScope, $timeout, $routeParams){
	
}]);