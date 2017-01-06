(function() {
	'use strict';

	angular
	.module('stocks')
	.controller('NavbarHeaderController', NavbarHeaderController);

	function NavbarHeaderController($rootScope, $location, $cookies) {
		var vm = this;
		// var actualCookie = $cookies.get('logado');

		// if ( actualCookie == 'admin' ) {
		// 	vm.user_on = 'Admin'
		// }
		// else if ( actualCookie == 'user' ) {
		// 	vm.user_on = 'User'
		// }

		// vm.leave_session = function leave_session() {
		// 	var actualCookie = $cookies.remove('logado');
		// 	$location.path('/login');
		// }

	}//end

})();