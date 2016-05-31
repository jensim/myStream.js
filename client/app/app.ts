'use strict';

angular.module('myStreamJsApp', [
  'myStreamJsApp.auth',
  'myStreamJsApp.admin',
  'myStreamJsApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
