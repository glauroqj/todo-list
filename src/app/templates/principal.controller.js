(function() {
	'use strict';

	angular
	.module('stocks')
	.controller('PrincipalController', PrincipalController);

	function PrincipalController($rootScope, $uibModal, $uibModalStack, $log, StockService, $scope, ngNotify) {
		var vm = this;
		vm.animationsEnabled = true;
		var box_lista = document.getElementById('box-lista');
		var box_sembusca = document.getElementById('box-sembusca');
		var box_resposta = document.getElementById('box-resposta');

		vm.isCollapsed = false;
		vm.listaDetails = false;
		vm.semBusca = false;

		vm.show_details = function(name_code) {
			vm.listaDetails = true;
			box_sembusca.className = 'animated fadeOut';
			$scope.search_bar = name_code;
			setTimeout( function() {
				box_lista.className = 'box__busca__lista ng-hide';
			}, 10);
		}

		vm.search_bar = '';
		$scope.$watch('search_bar', function(letter) {
			if ( letter === '' ) {
				box_resposta.className = 'animated fadeInUp';
				box_sembusca.className = 'animated fadeIn';
				box_lista.className = 'box__busca__lista ng-hide';
				vm.listaDetails = false;
			}
			else {
				box_lista.className = 'box__busca__lista animated fadeIn';
				box_resposta.className = 'animated fadeInDown';
			}
		});


		function call_stock_service() {
			StockService.verify().then(function(response) {
				var i = 0;
				vm.listas = response;
			});
		};
		call_stock_service();

		ngNotify.config({
			theme: 'pure',
			position: 'top',
			duration: 3000,
			sticky: false,
			button: true,
			html: false
		});

		vm.open = function (size) {
			var modalInstance = $uibModal.open({
				animation: true,
				templateUrl: 'modal-sell.html',
				size: 'md',
				backdrop: 'static',
				controller: 'PrincipalController as Principal'
			});
			setTimeout( function() {
				box_lista.className = 'box__busca__lista ng-hide';
			}, 10);
		};

		vm.cancel = function () {
			$uibModalStack.dismissAll('cancelar transação');
			ngNotify.set('Transação cancelada!', {
				position: 'top',
				type: 'warn',
				sticky: false
			});
			box_sembusca.className = 'animated fadeOut';
			end_transition();
		};

		vm.confirm = function () {
			$uibModalStack.dismissAll('confirmar transação');
			ngNotify.set('Transação efetuada com sucesso!', {
				position: 'top',
				type: 'success',
				sticky: false
			});
			end_transition();
		};

		function end_transition() {
			setTimeout( function() {
				document.getElementById('showdetail').click();
			}, 400);
		}

	}/*end*/

})();