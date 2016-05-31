'use strict';

var app = require('../..');
import request from 'supertest';

var newSeries;

describe('Series API:', function() {

  describe('GET /api/series', function() {
    var seriess;

    beforeEach(function(done) {
      request(app)
        .get('/api/series')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          seriess = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      seriess.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/series', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/series')
        .send({
          name: 'New Series',
          info: 'This is the brand new series!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newSeries = res.body;
          done();
        });
    });

    it('should respond with the newly created series', function() {
      newSeries.name.should.equal('New Series');
      newSeries.info.should.equal('This is the brand new series!!!');
    });

  });

  describe('GET /api/series/:id', function() {
    var series;

    beforeEach(function(done) {
      request(app)
        .get('/api/series/' + newSeries._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          series = res.body;
          done();
        });
    });

    afterEach(function() {
      series = {};
    });

    it('should respond with the requested series', function() {
      series.name.should.equal('New Series');
      series.info.should.equal('This is the brand new series!!!');
    });

  });

  describe('PUT /api/series/:id', function() {
    var updatedSeries;

    beforeEach(function(done) {
      request(app)
        .put('/api/series/' + newSeries._id)
        .send({
          name: 'Updated Series',
          info: 'This is the updated series!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedSeries = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedSeries = {};
    });

    it('should respond with the updated series', function() {
      updatedSeries.name.should.equal('Updated Series');
      updatedSeries.info.should.equal('This is the updated series!!!');
    });

  });

  describe('DELETE /api/series/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/series/' + newSeries._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when series does not exist', function(done) {
      request(app)
        .delete('/api/series/' + newSeries._id)
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
