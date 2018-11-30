import request from 'supertest';
import app from '../src/app';

describe('Express Server', () => {
  test('It should response the GET method', (done) => {
    request(app)
      .get('/')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test('It should response the GET method - promise way', () => {
    return request(app)
      .get('/')
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });

  test('It should response the GET method - async way.', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});
