const request = require('supertest');
const app = require(__base + 'app.js');

describe('moduleDownload', function () {
    describe('POST /module_download', function () {
        it('should post a module_download', function () {

            var params = {
                module_version_id: '27467ab0-4b96-4da7-8e9d-d0f8acb3bd14',
                instance_id: '5b87a6fb-0e3d-4220-aaef-35351073d094',
                source: 'gladys,v3.0.0'
            };

            return request(app)
                .post('/module_download')
                .set('Authorization', 'JWT ' + process.env.TEST_JWT)
                .send(params)
                .expect(201)
                .then((response) => {
                    response.body.should.have.property('module_version_id');
                });
        });
    });
});