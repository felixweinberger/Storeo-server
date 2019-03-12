/* eslint-env node, mocha */
const request = require('supertest');
const app = require('../index');


describe('GET /login', () => {
  it('responds with 404 on empty request', (done) => {
    request(app)
      .get('/login')
      .expect(404, done);
  });
});

describe('POST /signup', () => {
  it('responds with 404 on empty request', (done) => {
    request(app)
      .get('/login')
      .expect(404, done);
  });
});

describe('GET /token', () => {
  it('responds with 404 on empty request', (done) => {
    request(app)
      .get('/login')
      .expect(404, done);
  });
});
