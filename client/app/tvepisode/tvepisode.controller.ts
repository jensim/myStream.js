'use strict';
(function(){

class TvepisodeComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('myStreamJsApp')
  .component('tvepisode', {
    templateUrl: 'app/tvepisode/tvepisode.html',
    controller: TvepisodeComponent
  });

})();
