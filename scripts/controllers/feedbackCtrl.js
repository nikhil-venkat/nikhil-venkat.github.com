function feedbackCtrl($scope,$rootScope){
	$rootScope.activeTab = 'feedback';
}
feedbackCtrl.inject = ['$scope','$rootScope'];