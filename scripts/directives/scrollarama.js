
/*
	scrollarama directive
	====================
	Used to add a loading icon on the screen while waiting for ajax operations 
	to finish.

	Usage
	-----
	set $rootScope.loading = true;
 */

angular.module('scrollarama', [])

.directive('scrollarama', function(){
	return {
		link: function(scope, elem, attrs) {
			var section = ($(elem).attr('id'));
			var controller = $.superscrollorama();
	        controller.addTween(
	            '#'+section, 
	            TweenMax.from( $('#'+section),.5,{css:{opacity: 0}}),
	              0,
	              0,
	              false
	            );
		}
	};
});