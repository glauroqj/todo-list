(function() {
	'use strict';

	angular
	.module('todo-list')
	.directive('navbarheader', function() {
		return {
			scope: true,
			restrict: 'AE',
			replace: 'true',
			templateUrl: 'app/components/navbar-header/navbar-header.html'
		};
	});

})();