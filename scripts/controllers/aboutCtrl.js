function aboutCtrl($scope,$rootScope){
	
	$rootScope.activeTab = 'about';
}
aboutCtrl.inject = ['$scope','$rootScope'];