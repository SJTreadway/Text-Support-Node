(function() {
	angular.module('texxtSupport')
		.service('supportService', function($http) {

			this.addComment = function(comment) {
				return $http({
					method: 'POST',
					url: '/support/messages/',
					data: {
						message: comment,
					}
				});
			};

		})



})();