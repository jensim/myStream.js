'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var tvepisodeCtrlStub = {
  index: 'tvepisodeCtrl.index',
  show: 'tvepisodeCtrl.show',
  create: 'tvepisodeCtrl.create',
  update: 'tvepisodeCtrl.update',
  destroy: 'tvepisodeCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var tvepisodeIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './tvepisode.controller': tvepisodeCtrlStub
});

describe('Tvepisode API Router:', function() {

  it('should return an express router instance', function() {
    tvepisodeIndex.should.equal(routerStub);
  });

  describe('GET /api/tvepisodes', function() {

    it('should route to tvepisode.controller.index', function() {
      routerStub.get
        .withArgs('/', 'tvepisodeCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/tvepisodes/:id', function() {

    it('should route to tvepisode.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'tvepisodeCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/tvepisodes', function() {

    it('should route to tvepisode.controller.create', function() {
      routerStub.post
        .withArgs('/', 'tvepisodeCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/tvepisodes/:id', function() {

    it('should route to tvepisode.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'tvepisodeCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/tvepisodes/:id', function() {

    it('should route to tvepisode.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'tvepisodeCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/tvepisodes/:id', function() {

    it('should route to tvepisode.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'tvepisodeCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
