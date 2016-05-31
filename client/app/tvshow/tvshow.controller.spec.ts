'use strict';

describe('Component: TvshowComponent', function () {

  // load the controller's module
  beforeEach(module('myStreamJsApp'));

  var TvshowComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    TvshowComponent = $componentController('TvshowComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
