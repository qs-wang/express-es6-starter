
import request from 'supertest';
import app from '../src/app';

describe('Express Server', () => {
  test('It should response the GET method', (done) => {
    request(app).get('/').then((response) => {
        expect(response.statusCode).toBe(200);
        done();
    });
  });

});
