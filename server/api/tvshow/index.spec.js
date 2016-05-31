'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var tvshowCtrlStub = {
  index: 'tvshowCtrl.index',
  show: 'tvshowCtrl.show',
  create: 'tvshowCtrl.create',
  update: 'tvshowCtrl.update',
  destroy: 'tvshowCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var tvshowIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './tvshow.controller': tvshowCtrlStub
});

describe('Tvshow API Router:', function() {

  it('should return an express router instance', function() {
    tvshowIndex.should.equal(routerStub);
  });

  describe('GET /api/tvshows', function() {

    it('should route to tvshow.controller.index', function() {
      routerStub.get
        .withArgs('/', 'tvshowCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/tvshows/:id', function() {

    it('should route to tvshow.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'tvshowCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/tvshows', function() {

    it('should route to tvshow.controller.create', function() {
      routerStub.post
        .withArgs('/', 'tvshowCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/tvshows/:id', function() {

    it('should route to tvshow.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'tvshowCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/tvshows/:id', function() {

    it('should route to tvshow.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'tvshowCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/tvshows/:id', function() {

    it('should route to tvshow.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'tvshowCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
