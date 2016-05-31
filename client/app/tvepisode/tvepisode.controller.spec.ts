'use strict';

describe('Component: TvepisodeComponent', function () {

  // load the controller's module
  beforeEach(module('myStreamJsApp'));

  var TvepisodeComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    TvepisodeComponent = $componentController('TvepisodeComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
