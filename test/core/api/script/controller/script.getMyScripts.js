const request = require('supertest');
const app = require(__base + 'app.js');

describe('script', function () {
    describe('GET /account/script', function () {
        it('should scripts I created', function () {

            return request(app)
                .get('/account/script?take=20&skip=0')
                .set('Authorization', 'JWT ' + process.env.TEST_JWT)
                .expect(200)
                .then((response) => {
                    response.body.should.be.instanceOf(Array);
                });
        });
    });
});