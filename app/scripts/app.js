'use strict';

/**
 * @ngdoc overview
 * @name djoisajdoijdsApp
 * @description
 * # djoisajdoijdsApp
 *
 * Main module of the application.
 */
angular
  .module('djoisajdoijdsApp', [
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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
        .when('/friends', {
          templateUrl: 'views/friends.html',
          controller: 'FriendsCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
