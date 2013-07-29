function resumeCtrl($scope,$rootScope){

	$rootScope.flags.loading = true;
	$rootScope.flags.loading = false;
}
resumeCtrl.inject = ['$scope','$rootScope'];