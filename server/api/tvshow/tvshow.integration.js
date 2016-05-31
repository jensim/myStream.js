'use strict';

var app = require('../..');
import request from 'supertest';

var newTvshow;

describe('Tvshow API:', function() {

  describe('GET /api/tvshows', function() {
    var tvshows;

    beforeEach(function(done) {
      request(app)
        .get('/api/tvshows')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          tvshows = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      tvshows.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/tvshows', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/tvshows')
        .send({
          name: 'New Tvshow',
          info: 'This is the brand new tvshow!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newTvshow = res.body;
          done();
        });
    });

    it('should respond with the newly created tvshow', function() {
      newTvshow.name.should.equal('New Tvshow');
      newTvshow.info.should.equal('This is the brand new tvshow!!!');
    });

  });

  describe('GET /api/tvshows/:id', function() {
    var tvshow;

    beforeEach(function(done) {
      request(app)
        .get('/api/tvshows/' + newTvshow._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          tvshow = res.body;
          done();
        });
    });

    afterEach(function() {
      tvshow = {};
    });

    it('should respond with the requested tvshow', function() {
      tvshow.name.should.equal('New Tvshow');
      tvshow.info.should.equal('This is the brand new tvshow!!!');
    });

  });

  describe('PUT /api/tvshows/:id', function() {
    var updatedTvshow;

    beforeEach(function(done) {
      request(app)
        .put('/api/tvshows/' + newTvshow._id)
        .send({
          name: 'Updated Tvshow',
          info: 'This is the updated tvshow!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedTvshow = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedTvshow = {};
    });

    it('should respond with the updated tvshow', function() {
      updatedTvshow.name.should.equal('Updated Tvshow');
      updatedTvshow.info.should.equal('This is the updated tvshow!!!');
    });

  });

  describe('DELETE /api/tvshows/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/tvshows/' + newTvshow._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when tvshow does not exist', function(done) {
      request(app)
        .delete('/api/tvshows/' + newTvshow._id)
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
