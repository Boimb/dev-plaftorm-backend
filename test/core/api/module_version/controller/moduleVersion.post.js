const request = require('supertest');
const app = require(__base + 'app.js');

describe('moduleVersion', function () {
    describe('POST /module_version', function () {
        it('should post a module_version', function () {

            var params = {
                module_id: '7b9f5d68-bd3d-4619-9036-b65e442d1636',
                version: '1.2.1'
            };

            return request(app)
                .post('/module_version')
                .set('Authorization', 'JWT ' + process.env.TEST_JWT)
                .send(params)
                .expect(201)
                .then((response) => {
                    response.body.should.have.property('module_id');
                    response.body.should.have.property('version');
                });
        });
    });
});