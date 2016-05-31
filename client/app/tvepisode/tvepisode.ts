'use strict';

angular.module('myStreamJsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tvepisode', {
        url: '/tvepisode',
        template: '<tvepisode></tvepisode>'
      });
  });
