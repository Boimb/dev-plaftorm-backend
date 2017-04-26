const request = require('supertest');
const app = require(__base + 'app.js');

describe('middleware', function () {
    describe('POST /UNKNOWN_ROUTE', function () {
        it('should return 404 error', function () {
            return request(app)
                .get('/UNKNOWN_ROUTE')
                .expect(404);
        });
    });
});