const request = require('supertest');
const app = require(__base + 'app.js');

describe('notification', function () {
    describe('GET /notification', function () {
        it('should get notifications', function () {

            return request(app)
                .get('/notification')
                .set('Authorization', 'JWT ' + process.env.TEST_JWT)
                .expect(200)
                .then((response) => {
                    response.body.should.be.instanceOf(Array);
                });
        });
    });
});