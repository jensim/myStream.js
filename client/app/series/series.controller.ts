'use strict';
(function(){

class SeriesComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('myStreamJsApp')
  .component('series', {
    templateUrl: 'app/series/series.html',
    controller: SeriesComponent
  });

})();
