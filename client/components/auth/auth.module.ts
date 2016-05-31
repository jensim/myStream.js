'use strict';

angular.module('myStreamJsApp.auth', [
  'myStreamJsApp.constants',
  'myStreamJsApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
