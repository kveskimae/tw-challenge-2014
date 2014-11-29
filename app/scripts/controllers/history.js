'use strict';

/**
 * @ngdoc function
 * @name djoisajdoijdsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the djoisajdoijdsApp
 */
angular.module('djoisajdoijdsApp')
  .controller('HistoryCtrl', function ($scope) {


    $scope.transactions = [
      {
        name: 'Bob Marley',
        sum: '$ 200',
        status: 'completed'
      },
      {
        name: 'Mary Miller',
        sum: '$ 250',
        status: 'pending'
      },
      {
        name: 'John Doe',
        sum: '$ 200',
        status: 'rejected'
      }
    ];

  });
