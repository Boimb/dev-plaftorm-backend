const request = require('supertest');
const app = require(__base + 'app.js');

describe('admin', function () {
    describe('GET /admin/module', function () {
        it('should return modules ', function () {

            return request(app)
                .get('/admin/module')
                .set('Authorization', 'JWT ' + process.env.TEST_JWT)
                .expect(200)
                .then((response) => {
                    response.body.should.be.instanceOf(Array);
                });
        });
    });
});