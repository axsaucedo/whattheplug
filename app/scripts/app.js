'use strict';

/**
 * @ngdoc overview
 * @name whattheplugApp
 * @description
 * # whattheplugApp
 *
 * Main module of the application.
 */
angular
  .module('whattheplugApp', [
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
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
