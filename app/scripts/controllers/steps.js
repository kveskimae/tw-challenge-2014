'use strict';

/**
 * @ngdoc function
 * @name djoisajdoijdsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the djoisajdoijdsApp
 */
angular.module('djoisajdoijdsApp')
  .controller('StepsCtrl', function ($scope, $location, $rootScope) {

    $rootScope.logged = true;

    console.log($rootScope.bankData)


    $scope.bankData = $rootScope.bankData;


    $scope.fillBankData = function(){
      $location.path('/bank-data')
    }



    $scope.pay = function(){
      $location.path('/friends')
    }





  });
