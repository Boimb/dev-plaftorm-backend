const request = require('supertest');
const app = require(__base + 'app.js');

describe('user', function () {
    describe('POST /signup', function () {
        it('should create a user', function () {
            const user = require(__base + 'core/api/user/model/user.js');
            var params = {
                name: 'Jean',
                email: 'jean.test@test.fr',
                password: 'testtests'
            };

            return request(app)
                .post('/signup')
                .send(params)
                .expect(201)
                .then((response) => {
                    response.body.should.have.property('access_token');
                    response.body.should.have.property('refresh_token');
                });
        });
    });
});