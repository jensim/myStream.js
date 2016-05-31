'use strict';

describe('Component: SeriesComponent', function () {

  // load the controller's module
  beforeEach(module('myStreamJsApp'));

  var SeriesComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    SeriesComponent = $componentController('SeriesComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
