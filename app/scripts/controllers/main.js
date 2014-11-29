'use strict';

/**
 * @ngdoc function
 * @name djoisajdoijdsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the djoisajdoijdsApp
 */
angular.module('djoisajdoijdsApp')
  .controller('MainCtrl', function ($scope,$location) {
    $location.path('/unauth');
  });
