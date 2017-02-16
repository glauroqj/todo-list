(function() {
	'use strict';

	angular
	.module('todo-list')
	.controller('TaskController', TaskController);

	function TaskController($rootScope, $scope, $element, ngNotify) {
		var vm = this;

		vm.todos = [
		{
			"id": 0,
			"task": "finalizar desafio de criação",
			"status": true
		},
		{
			"id": 1,
			"task": "pensar e analisar",
			"status": true
		},
		{
			"id": 2,
			"task": "definir layout e design",
			"status": false
		},
		{
			"id": 3,
			"task": "pesquisar referências",
			"status": false
		},
		{
			"id": 4,
			"task": "enviar relatório",
			"status": false
		}
		]

		vm.add = function(list_bar_insert, $event) {
			var field = vm.list_bar_insert;
			if ( field != '' && field != undefined && field != null ) {
				var count = 0;
				var items = document.getElementsByClassName('item');
				count = items.length;
				vm.todos.push({id: count, task: vm.list_bar_insert, status: false});
				vm.list_bar_insert= '';
				ngNotify.set('Tarefa adicionada! ', 'success');
			}
			else {
				ngNotify.set('Campo vazio! Favor preencher :] ', 'error');
			}
		}

		vm.delete = function(item) {
			var index = vm.todos.indexOf(item);
			vm.todos.splice(index, 1); 
			ngNotify.set('Tarefa removida! ', 'warn');
		}

		vm.verify = function(id, $event) {
			var item = document.getElementById(id);
			var teste_val = item.getAttribute('checked');

			if ( id == item.id ) {
				var status = document.getElementById(item.id).parentNode;
				var get_status = status.attributes[0].nodeValue;
				if ( get_status == 'false' ) {
					status.setAttribute("status", "true");
				}
				else {
					status.setAttribute("status", "false");
				}
				
			}

			if ( teste_val == null ) {
				item.setAttribute("checked", "checked");
				ngNotify.set('Tarefa concluída! \o/', {
					position: 'bottom',
					type: 'info',
					duration: 800
				});
			}
			else {
				item.removeAttribute('checked');
			}
		}

		vm.all = function() {
			var items = document.getElementsByClassName('item');
			for ( var i=0; i < items.length; i++ ) {
				items[i].className = 'animated item visible fadeInDown';
			}
		}

		vm.pendent = function() {
			var items = document.getElementsByClassName('item');
			for ( var i=0; i < items.length; i++ ) {
				var get_status = items[i].attributes[0].nodeValue;
				if ( get_status == 'true' ) {
					items[i].className = 'animated item fadeOutUp hidden';
				}
				else if ( get_status == 'false' ) {
					items[i].className = 'animated item fadeInDown visible';
				}
				else {
					items[i].className = 'animated item fadeInDown visible';
				}
			}
		}

		vm.done = function() {
			var items = document.getElementsByClassName('item');
			for ( var i=0; i < items.length; i++ ) {
				var get_status = items[i].attributes[0].nodeValue;
				if ( get_status == 'false' ) {
					items[i].className = 'animated item fadeOutUp hidden';
				}
				else if ( get_status == 'true' ) {
					items[i].className = 'animated item fadeInDown visible';
				}
				else {
					items[i].className = 'animated item fadeInDown visible';
				}
			}
		}

		ngNotify.config({
			theme: 'pure',
			position: 'top',
			duration: 2000,
			sticky: false,
			button: true,
			html: false
		});

	}//end

})();