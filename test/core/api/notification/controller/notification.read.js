const request = require('supertest');
const app = require(__base + 'app.js');

describe('notification', function () {
    describe('POST /notification/read', function () {
        it('should read notifications', function () {

            return request(app)
                .post('/notification/read')
                .set('Authorization', 'JWT ' + process.env.TEST_JWT)
                .expect(200)
                .then((response) => {
                    
                });
        });
    });
});