'use strict';

angular.module('myStreamJsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('series', {
        url: '/series',
        template: '<series></series>'
      });
  });
