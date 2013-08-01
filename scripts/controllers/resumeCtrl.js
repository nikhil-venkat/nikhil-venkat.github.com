function resumeCtrl($scope,$rootScope){

	$rootScope.flags.loading = true;
	$rootScope.flags.loading = false;

	$scope.showResume = function(){
		$scope.showResume = true;
	}
}
resumeCtrl.inject = ['$scope','$rootScope'];