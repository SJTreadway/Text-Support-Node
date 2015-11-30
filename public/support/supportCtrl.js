(function() {
	angular.module('texxtSupport')
		.controller('supportCtrl', function($scope, $firebaseObject, fb) {

			var supportRef = new Firebase(fb.url)
			
			$scope.numbers= $firebaseObject(supportRef);
		});
})();
