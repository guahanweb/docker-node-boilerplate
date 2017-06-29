'use strict';

const startup = require('../../server');
const request = require('supertest');
const expect = require('chai').expect;

describe ('Testing /ping endpoint', function () {
  let server;
  before(function (done) {
    startup({ port: null })
      .then(s => {
        server = s;
        done();
      });
  });

  it ('should resolve the endpoint with 200 status code and "OK"', function (done) {
    request(server.listener)
      .get('/ping')
      .expect(200, function (err, resp) {
        let json = JSON.parse(resp.text);
        expect(json.status).equal('OK');
        done();
      });
  });
});
