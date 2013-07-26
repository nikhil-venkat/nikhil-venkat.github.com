function projectsCtrl($scope,$rootScope){
	$rootScope.activeTab = 'projects';
}
projectsCtrl.inject = ['$scope','$rootScope'];