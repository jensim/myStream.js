'use strict';

var app = require('../..');
import request from 'supertest';

var newTvepisode;

describe('Tvepisode API:', function() {

  describe('GET /api/tvepisodes', function() {
    var tvepisodes;

    beforeEach(function(done) {
      request(app)
        .get('/api/tvepisodes')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          tvepisodes = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      tvepisodes.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/tvepisodes', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/tvepisodes')
        .send({
          name: 'New Tvepisode',
          info: 'This is the brand new tvepisode!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newTvepisode = res.body;
          done();
        });
    });

    it('should respond with the newly created tvepisode', function() {
      newTvepisode.name.should.equal('New Tvepisode');
      newTvepisode.info.should.equal('This is the brand new tvepisode!!!');
    });

  });

  describe('GET /api/tvepisodes/:id', function() {
    var tvepisode;

    beforeEach(function(done) {
      request(app)
        .get('/api/tvepisodes/' + newTvepisode._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          tvepisode = res.body;
          done();
        });
    });

    afterEach(function() {
      tvepisode = {};
    });

    it('should respond with the requested tvepisode', function() {
      tvepisode.name.should.equal('New Tvepisode');
      tvepisode.info.should.equal('This is the brand new tvepisode!!!');
    });

  });

  describe('PUT /api/tvepisodes/:id', function() {
    var updatedTvepisode;

    beforeEach(function(done) {
      request(app)
        .put('/api/tvepisodes/' + newTvepisode._id)
        .send({
          name: 'Updated Tvepisode',
          info: 'This is the updated tvepisode!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedTvepisode = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedTvepisode = {};
    });

    it('should respond with the updated tvepisode', function() {
      updatedTvepisode.name.should.equal('Updated Tvepisode');
      updatedTvepisode.info.should.equal('This is the updated tvepisode!!!');
    });

  });

  describe('DELETE /api/tvepisodes/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/tvepisodes/' + newTvepisode._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when tvepisode does not exist', function(done) {
      request(app)
        .delete('/api/tvepisodes/' + newTvepisode._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
