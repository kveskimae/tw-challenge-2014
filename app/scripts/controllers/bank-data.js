'use strict';

/**
 * @ngdoc function
 * @name djoisajdoijdsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the djoisajdoijdsApp
 */
angular.module('djoisajdoijdsApp')
  .controller('BankDataCtrl', function ($scope) {
    $scope.bankData = {};
    $scope.bankData.firstName = null;
    $scope.bankData.lastName = null;
    $scope.bankData.accountNumber = null;



    $scope.save = function () {
      if(!($scope.bankData.firstName && $scope.bankData.lastName && $scope.bankData.accountNumber)){
        $scope.err = true;
      }


      console.log($scope.bankData,"saved")
    }


  });
