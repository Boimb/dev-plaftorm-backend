const request = require('supertest');
const app = require(__base + 'app.js');

describe('module', function () {
    describe('PATCH /module/:id', function () {
        it('should patch a module', function () {

            var params = {
                img: 'http://test.fr',
                url: 'https://github.com/gladys-test',
                min_gladys_version: 3,
                max_gladys_version: 3
            };

            return request(app)
                .patch('/module/' + '7b9f5d68-bd3d-4619-9036-b65e442d1636')
                .set('Authorization', 'JWT ' + process.env.TEST_JWT)
                .send(params)
                .expect(200)
                .then((response) => {
                    response.body.should.have.property('url', params.url);
                });
        });
    });
});