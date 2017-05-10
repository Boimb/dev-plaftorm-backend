const request = require('supertest');
const app = require(__base + 'app.js');

describe('user', function () {
    describe('POST /login', function () {
        it('should login a user', function () {
            
            var params = {
                email: 'tony.stark@test.fr',
                password: 'testtests'
            };

            return request(app)
                .post('/login')
                .send(params)
                .expect(200)
                .then((response) => {
                    response.body.should.have.property('access_token');
                });
        });

        it('should return a 403 error forbidden', function () {
            
            var params = {
                email: 'tony.stark@test.fr',
                password: 'WRONG_PASSWORD'
            };

            return request(app)
                .post('/login')
                .send(params)
                .expect(403);
        });
    });
});