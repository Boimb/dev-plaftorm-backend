const request = require('supertest');
const app = require(__base + 'app.js');

describe('instance', function () {
    describe('PATCH /instance', function () {
        it('should patch an instance', function () {

            var params = {
                version: '3.5.6'
            };

            return request(app)
                .patch('/instance/5b87a6fb-0e3d-4220-aaef-35351073d094')
                .send(params)
                .expect(200)
                .then((response) => {
                    response.body.should.have.property('version', params.version);
                });
        });
    });
});