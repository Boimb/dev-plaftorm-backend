const request = require('supertest');
const app = require(__base + 'app.js');

describe('sentence', function () {
    describe('GET /sentence', function () {
        it('should get sentences', function () {

            return request(app)
                .get('/sentence')
                .expect(200)
                .then((response) => {
                    response.body.should.be.instanceOf(Array);
                });
        });
    });
});