
const request = require('supertest');
const app = require('./server.js');

describe('Test the root path', () => {
    describe('Test the root path', () => {
        test('It should response the GET method', () => {
            return request(app).get('/photos').expect(200);
        });
    })
});