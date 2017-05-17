const request = require('supertest');
const app = require(__base + 'app.js');

describe('user', function () {
    describe('PATCH /user', function () {
        it('should update a user', function () {
            
            var params = {
                password: 'newpassword'
            };

            return request(app)
                .patch('/user')
                .set('Authorization', 'JWT ' + process.env.TEST_JWT)
                .send(params)
                .expect(200)
                .then((response) => {
                    response.body.should.not.have.property('password');
                });
        });
    });
});