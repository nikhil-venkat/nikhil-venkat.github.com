function mainCtrl($scope,$rootScope,$window){
	$scope.myName = 'Nikhil Venkat';
	$rootScope.flags.loading = true;

	$scope.templateLoaded = function(){
		setTimeout(function(){
			$scope.$emit('templateLoaded',true);
		},2000);
	}

	$scope.$on('templateLoaded',function(event,templateLoaded){
		if(templateLoaded){
			var hash;
			hash = $window.location.hash.split('#/')[1];
			if(!hash){
				hash = 'home';
			}
			$rootScope.setActiveTab(hash);		
			$rootScope.flags.loading = false;
			
			var controller = $.superscrollorama();
	        controller.addTween(
	            '#resume', 
	            TweenMax.from( $('#resume'),.5,{css:{opacity: 0}}),
	              0,
	              0,
	              false
	            );

	            controller.addTween(
	            '#work', 
	            TweenMax.from( $('#work'),.5,{css:{opacity: 0}}),
	              0,
	              0,
	              false
	            );

	            controller.addTween(
	            '#contact', 
	            TweenMax.from( $('#contact'),.5,{css:{opacity: 0}}),
	              0,
	              0,
	              false
	            );
		}
	});
	
}
mainCtrl.inject = ['$scope','$rootScope','$window'];




