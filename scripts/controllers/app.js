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
    	}, 800);	
	}

	$rootScope.isScrolledIntoView = function(elem){
	    var docViewTop = $(window).scrollTop();
	    var docViewBottom = docViewTop + $(window).height();

	    var elemTop = $(elem).offset().top;
	    var elemBottom = elemTop + $(elem).height();

	    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}

	$(window).scroll(function () {
		var index = $('#index');
		var about = $('#about');
		var resume = $('#resume');
		var work = $('#work');
		var projects = $('#projects');
		var contact = $('#contact');
		var feedback = $('#feedback');

		if($rootScope.isScrolledIntoView(index)){
			$rootScope.setTabBackground('index');
		}
		else if($rootScope.isScrolledIntoView(about)){
			$rootScope.setTabBackground('about');
		}
		else if($rootScope.isScrolledIntoView(resume)){
			$rootScope.setTabBackground('resume');
		}
		else if($rootScope.isScrolledIntoView(work)){
			$rootScope.setTabBackground('work');
		}
		else if($rootScope.isScrolledIntoView(projects)){
			$rootScope.setTabBackground('projects');
		}
		else if($rootScope.isScrolledIntoView(contact)){
			$rootScope.setTabBackground('contact');
		}
		else if($rootScope.isScrolledIntoView(feedback)){
			$rootScope.setTabBackground('feedback');
		}
		
	});

	$rootScope.setTabBackground = function(tab){
		$rootScope.$apply(function(){
			$rootScope.activeTab = tab;
		});
	}
	

}]);