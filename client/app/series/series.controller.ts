'use strict';
(function(){

class SeriesComponent {
  private $http;
  private socket;
  private newSeries;
  private allSeries;

  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.allSeries = [];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('series');
    });
  }

  $onInit() {
    this.$http.get('/api/series').then(response => {
      this.allSeries = response.data;
      this.socket.syncUpdates('series', this.allSeries);
    });
  }

  addSeries() {
    if (this.newSeries) {
      // this.$http.post('/api/series', { name: this.newSeries });
      this.$http.post('/api/series', { name: this.newSeries.name, info: this.newSeries.info, active: true, urls: [] });
      this.newSeries = {};
    }
  }

  deleteSeries(series) {
    this.$http.delete('/api/series/' + series._id);
  }
}

angular.module('myStreamJsApp')
  .component('series', {
    templateUrl: 'app/series/series.html',
    controller: SeriesComponent
  });

})();
