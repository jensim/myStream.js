'use strict';
(function(){

class TvshowComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('myStreamJsApp')
  .component('tvshow', {
    templateUrl: 'app/tvshow/tvshow.html',
    controller: TvshowComponent
  });

})();
