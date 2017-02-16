(function() {
	'use strict';

	angular
	.module('todo-list')
	.directive('task', function() {
		return {
			scope: true,
			restrict: 'AE',
			replace: 'true',
			templateUrl: 'app/components/task/task.html'
		};
	});

})();