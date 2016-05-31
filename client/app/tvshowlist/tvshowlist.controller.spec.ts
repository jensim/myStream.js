'use strict';

describe('Component: TvshowlistComponent', function () {

  // load the controller's module
  beforeEach(module('myStreamJsApp'));

  var TvshowlistComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    TvshowlistComponent = $componentController('TvshowlistComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
