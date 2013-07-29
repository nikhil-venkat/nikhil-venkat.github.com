function mainCtrl($scope,$rootScope,$window){
	$scope.myName = 'Nikhil Venkat';
	$rootScope.flags.loading = true;
	$rootScope.flags.loading = false;

	var hash;
	hash = $window.location.hash.split('#/')[1];
	$rootScope.setActiveTab(hash);

	
}
mainCtrl.inject = ['$scope','$rootScope','$window'];




