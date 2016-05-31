'use strict';

angular.module('myStreamJsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tvshowlist', {
        url: '/tvshowlist',
        template: '<tvshowlist></tvshowlist>'
      });
  });
