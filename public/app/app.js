(function() {
  'use strict';

  /**
   * @ngdoc index
   * @name app
   * @description
   * # app
   *
   * Main modules of the application.
   */

  angular.module('rubylens', [
    'ngResource',
    'ngAria',
    'ui.bootstrap',
    'ngMaterial',
    'ngMdIcons',
    'ngCookies',
    'ngAnimate',
    'ngTouch',
    'ngSanitize',
    'ui.router',
    'home',
    'login',
    'firebase'
  ])
  .constant('firebaseUrl', 'https://rubylens.firebaseio.com/')
  .config(function($locationProvider){
    $locationProvider.html5Mode(true);
  });

})();
