const request = require('supertest');
const app = require(__base + 'app.js');

describe('moduleReview', function () {
    describe('POST /module_review', function () {
        it('should post a module_review', function () {

            var params = {
                module_id: '7b9f5d68-bd3d-4619-9036-b65e442d1636',
                note: 5,
                text: 'this is a nice module'
            };

            return request(app)
                .post('/module_review')
                .set('Authorization', 'JWT ' + process.env.TEST_JWT)
                .send(params)
                .expect(201)
                .then((response) => {
                    response.body.should.have.property('module_id');
                });
        });
    });
});