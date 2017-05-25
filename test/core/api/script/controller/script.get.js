const request = require('supertest');
const app = require(__base + 'app.js');

describe('script', function () {
    describe('GET /script', function () {
        it('should get list of script', function () {

            return request(app)
                .get('/script?take=20&skip=0')
                .expect(200)
                .then((response) => {
                    response.body.should.be.instanceOf(Array);
                });
        });
    });
});