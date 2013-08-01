function mainCtrl($scope,$rootScope,$window){
	$scope.myName = 'Nikhil Venkat';
	$rootScope.flags.loading = true;
	$rootScope.flags.loading = false;

	$scope.templateLoaded = function(){
		$scope.$emit('templateLoaded',true);
	}

	$scope.$on('templateLoaded',function(event,templateLoaded){
		if(templateLoaded){
			var hash;
			hash = $window.location.hash.split('#/')[1];
			if(!hash){
				hash = 'index';
			}
			$rootScope.setActiveTab(hash);		
		}
	});
	
}
mainCtrl.inject = ['$scope','$rootScope','$window'];




