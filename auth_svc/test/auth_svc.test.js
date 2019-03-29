/* eslint-env mocha */
import request from 'supertest';
import app from '../index';
import sequelize from '../db';

let receivedToken = '';

describe('POST /signup', () => {
  describe('Responds 404 for non-POST requests', () => {
    it('Responds 404 for a GET request', (done) => {
      request(app)
        .get('/signup')
        .expect(404, done);
    });

    it('Responds 404 for a PUT request', (done) => {
      request(app)
        .put('/signup')
        .expect(404, done);
    });

    it('Responds 404 for a DELETE request', (done) => {
      request(app)
        .delete('/signup')
        .expect(404, done);
    });
  });

  describe('Responds 400 for incorrectly structured requests', () => {
    it('Responds 400 for an incorrect POST request', (done) => {
      request(app)
        .post('/signup')
        .expect(400, done);
    });
  });

  describe('Signs up a user when passed the correct arguments', () => {
    it('Signs up a user, returns 201 (created)', (done) => {
      request(app)
        .post('/signup')
        .send({
          firstname: 'Chuck',
          lastname: 'Norris',
          email: 'chuck@norris.com',
          password: 'supersecretpassword',
        })
        .expect(201, done);
    });
  });

  describe('Don\'t sign up a user if the email already exists', () => {
    it('Returns 400 if a user already exists.', () => {
      request(app)
        .post('/signup')
        .send({
          firstname: 'Chuck',
          lastname: 'Norris',
          email: 'chuck@norris.com',
          password: 'supersecretpassword',
        })
        .expect(400);
    });
  });
});

describe('GET /login', () => {
  describe('Responds 404 for non-GET requests', () => {
    it('Responds 404 for a POST request', (done) => {
      request(app)
        .post('/login')
        .expect(404, done);
    });

    it('Responds 404 for a PUT request', (done) => {
      request(app)
        .put('/login')
        .expect(404, done);
    });

    it('Responds 404 for a DELETE request', (done) => {
      request(app)
        .delete('/login')
        .expect(404, done);
    });
  });

  describe('Responds 404 if GET does not contain authorization header', () => {
    it('Responds 404 for a GET request without authorization', (done) => {
      request(app)
        .get('/login')
        .expect(404, done);
    });
  });

  describe('Handles valid logins correctly', () => {
    it('Responds 200 for a GET request with valid login', (done) => {
      request(app)
        .get('/login')
        .auth('chuck@norris.com', 'supersecretpassword')
        .expect(200, done);
    });

    it('Responds with a token when logging in to valid account', (done) => {
      request(app)
        .get('/login')
        .auth('chuck@norris.com', 'supersecretpassword')
        .expect((res) => {
          receivedToken = res.body.token;
          return typeof res.body.token === 'string';
        })
        .expect(200, done);
    });
  });

  describe('Handles invalid logins correctly', () => {
    it('Responds with a 400 error when wrong password', (done) => {
      request(app)
        .get('/login')
        .auth('chuck@norris.com', 'wrongpassword')
        .expect(400, done);
    });

    it('Responds with a 400 error when user doesn\'t exist', (done) => {
      request(app)
        .get('/login')
        .auth('inexistentdude', 'wrongpassword')
        .expect(400, done);
    });
  });
});

describe('GET /token', () => {
  describe('Responds 404 for non-GET requests', () => {
    it('Responds 404 for a POST request', (done) => {
      request(app)
        .post('/token')
        .expect(404, done);
    });

    it('Responds 404 for a PUT request', (done) => {
      request(app)
        .put('/token')
        .expect(404, done);
    });

    it('Responds 404 for a DELETE request', (done) => {
      request(app)
        .delete('/token')
        .expect(404, done);
    });
  });

  describe('Responds 401 if GET does not contain token', () => {
    it('Responds 401 (unauthorized) for a GET request without authorization', (done) => {
      request(app)
        .get('/token')
        .expect(401, done);
    });
  });

  describe('Handles valid tokens correctly', () => {
    it('Responds 200 for a GET request with valid token', (done) => {
      request(app)
        .get('/token')
        .set('Authorization', `Bearer ${receivedToken}`)
        .expect(200, done);
    });
  });

  describe('Handles invalid logins correctly', () => {
    it('Responds with a 400 error when wrong token', (done) => {
      request(app)
        .get('/login')
        .auth('chuck@norris.com', 'wrongpassword')
        .expect(400, done);
    });
  });
});

// clean up the unused chuck norris account at the end
sequelize.query('DELETE FROM users WHERE email ="chuck@norris.com"');
