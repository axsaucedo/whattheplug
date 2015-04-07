'use strict';

/**
 * @ngdoc function
 * @name whattheplugApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the whattheplugApp
 */
angular.module('whattheplugApp')
  .controller('MainCtrl', [
  	'$scope',
  	'plugInfo',
  	function ($scope, plugInfo) {
    	$scope.countries = Object.keys(plugInfo.plugInfo);
    	$scope.plugInfo = plugInfo.plugInfo;
	}]
  );
