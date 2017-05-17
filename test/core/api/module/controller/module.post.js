const request = require('supertest');
const app = require(__base + 'app.js');

describe('module', function () {
    describe('POST /module', function () {
        it('should create a module', function () {

            var params = {
                name: 'test',
                img: 'http://test.fr',
                url: 'https://github.com/gladys-test',
                slug: 'newmodule',
                min_gladys_version: 3,
                max_gladys_version: 3
            };

            return request(app)
                .post('/module')
                .set('Authorization', 'JWT ' + process.env.TEST_JWT)
                .send(params)
                .expect(201)
                .then((response) => {
                    response.body.should.have.property('name');
                });
        });
    });
});