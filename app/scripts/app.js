'use strict';

/**
 * @ngdoc overview
 * @name repositoriesApp
 * @description
 * # repositoriesApp
 *
 * Main module of the application.
 */
angular
  .module('repositoriesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
