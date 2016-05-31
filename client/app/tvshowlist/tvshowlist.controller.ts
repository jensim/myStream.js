'use strict';
(function(){

class TvshowlistComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('myStreamJsApp')
  .component('tvshowlist', {
    templateUrl: 'app/tvshowlist/tvshowlist.html',
    controller: TvshowlistComponent
  });

})();
