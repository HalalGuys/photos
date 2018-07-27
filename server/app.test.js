
const request = require('supertest');
const app = require('./server.js');

describe('Test the root path', () => {
    test('It should response the GET method', (done) => {
        request(app).get('/photos').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});