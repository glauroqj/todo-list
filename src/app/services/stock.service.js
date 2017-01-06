'use strict';

angular.module('stocks')
.factory('StockService', function($http, $q) {
	var returnResponseData = function (response) {
		return response.data;
	};
	var handleResponseError = function (logMessage) {
		return function (errResponse) {
			console.error(logMessage);
			return $q.reject(errResponse);
		};
	};
	return {
		verify: function () {
			return $http.get('http://localhost:3000/server/stocks.json')
			.then(returnResponseData, handleResponseError('Error ao efetuar busca!'));
		}
	};
});