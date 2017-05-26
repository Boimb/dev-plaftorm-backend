const request = require('supertest');
const app = require(__base + 'app.js');

describe('user', function () {
    describe('POST /user/activate/:token', function () {
        it('should activate a user account', function () {

            return request(app)
                .post('/user/activate/e09b11bf-5e17-4043-b0a0-967ce2884d76')
                .expect(200)
                .then((response) => {
                    
                });
        });
    });
});