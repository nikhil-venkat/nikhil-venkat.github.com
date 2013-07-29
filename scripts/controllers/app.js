angular.module('myWebsite', ['loading']).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      // when('/about', {templateUrl: 'pages/about.html'}).
      // when('/resume', {templateUrl: 'pages/resume.html'}).
      // when('/work', {templateUrl: 'pages/work.html'}).
      // when('/projects', {templateUrl: 'pages/projects.html'}).
      // when('/contact', {templateUrl: 'pages/contact.html'}).
      // when('/feedback', {templateUrl: 'pages/feedback.html'}).
      otherwise({redirectTo: '/index'});
}]).run(['$rootScope', '$timeout', '$routeParams','$window', function($rootScope, $timeout, $routeParams,$window){
	
	$rootScope.activeTab = 'index';
	$rootScope.flags = {};
	$rootScope.flags.loading = false;

	$rootScope.setActiveTab = function(tab){
		$rootScope.clickedTab = tab;
		$rootScope.activeTab = tab;
		$('html, body').animate({
        	scrollTop: $($('#'+tab)).offset().top-98
    	}, 500);	
	}	

}]);