const request = require('supertest');
const app = require(__base + 'app.js');

describe('sentence', function () {
    describe('POST /sentence', function () {
        it('should create a sentence', function () {

            var params = {
                text: 'How are you ?'
            };

            return request(app)
                .post('/sentence')
                .set('Authorization', 'JWT ' + process.env.TEST_JWT)
                .send(params)
                .expect(201)
                .then((response) => {
                    response.body.should.have.property('text');
                });
        });
    });
});