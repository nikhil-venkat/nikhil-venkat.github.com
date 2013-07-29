function aboutCtrl($scope,$rootScope,$window){
	
	$rootScope.flags.loading = true;
	$rootScope.flags.loading = false;

}
aboutCtrl.inject = ['$scope','$rootScope','$window'];