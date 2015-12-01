(function() {
	angular.module('texxtSupport')
		.controller('supportCtrl', function($scope, $firebaseObject, fb, supportService) {

			var supportRef = new Firebase(fb.url);
			$scope.numbers = $firebaseObject(supportRef);

			$scope.addComment = function(comment) {
				supportService.addComment($scope.comment);
			};
		});
})();
