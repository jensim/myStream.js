'use strict';

angular.module('myStreamJsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tvshow', {
        url: '/tvshow',
        template: '<tvshow></tvshow>'
      });
  });
