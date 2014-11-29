'use strict';

/**
 * @ngdoc function
 * @name djoisajdoijdsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the djoisajdoijdsApp
 */
angular.module('djoisajdoijdsApp')
  .controller('TransactionCtrl', function ($scope, $location) {
      $scope.amount = 0;
      $scope.fee = 0;
      if($scope.amount != 0) {
        console.log(11);
        $scope.fee = $scope.amount / 1000;
      }

      $scope.back = function() {
        $location.path("/friends");
      };
      $scope.confirm = function() {
       $scope.message= {};
        $scope.message.value = $scope.amount;

        $scope.succ = true;
      };

  });
