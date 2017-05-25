const request = require('supertest');
const app = require(__base + 'app.js');

describe('sentence', function () {
    describe('POST /sentence/:id/vote', function () {
        it('should vote for a sentence', function () {

            var params = {
                vote: -1
            };

            return request(app)
                .post('/sentence/4ba105f0-c986-4770-8c01-536bc2a3a640/vote')
                .set('Authorization', 'JWT ' + process.env.TEST_JWT)
                .send(params)
                .expect(200)
                .then((response) => {
                    response.body.should.have.property('vote', -1);
                });
        });
    });
});