function mainCtrl($scope,$rootScope,$window){
	$scope.myName = 'Nikhil Venkat';
	$rootScope.flags.loading = true;

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
			$rootScope.flags.loading = false;

			/*
			var scrollorama = $.scrollorama({ blocks:'.scrollblock' });
			scrollorama.onBlockChange(function() {
   			console.log('You just scrolled to block#'+scrollorama.blockIndex);
			 });
			scrollorama
				.animate('#resume_btn',{ delay:500, duration:'500',property:'opacity', start:0 , end:1 })
			*/
		}
	});
	
}
mainCtrl.inject = ['$scope','$rootScope','$window'];




