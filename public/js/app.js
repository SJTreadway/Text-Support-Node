(function() {
	angular.module('texxtSupport', ['ui.router', 'firebase'])
		.constant('fb', {
			url: 'https://texxt-support.firebaseio.com/numbers',
		})
		.config(function($stateProvider, $urlRouterProvider) {

			$stateProvider

				.state('home', {
					url: '/',
					templateUrl: '/home/homeTmpl.html'
				})

				.state('support', {
					url: '/support',
					templateUrl: '/support/supportTmpl.html',
					controller: 'supportCtrl'
				})

			$urlRouterProvider.otherwise('/');
		});
})();