(function() {
  'use strict';

  angular
  .module('stocks', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngCookies', 
    'ngResource', 'ngRoute', 'ui.bootstrap', 'ngNotify'])
  .config(config);


  function config($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
    .when('/principal', {
      templateUrl: 'app/templates/principal.html',
      controller: 'PrincipalController',
      controllerAs: 'Principal'
    })
    .otherwise({
      redirectTo: '/principal'
    });

  }

  // angular
  // .module('ngNotify', ['ngNotify'])
  // .config(function(ngNotify) {
  //   ngNotify.config({
  //     theme: 'pure',
  //     position: 'top',
  //     duration: 3000,
  //     sticky: false,
  //     type: 'info',
  //     button: true,
  //     html: false
  //   });
  // });

})();
