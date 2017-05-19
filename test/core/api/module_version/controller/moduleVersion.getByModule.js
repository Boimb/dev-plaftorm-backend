const request = require('supertest');
const app = require(__base + 'app.js');

describe('moduleVersion', function () {
    describe('GET /module/:id/version', function () {
        it('should get version of a module', function () {

            return request(app)
                .get('/module/7b9f5d68-bd3d-4619-9036-b65e442d1636/version')
                .expect(200)
                .then((response) => {
                    var versions = response.body;

                    versions.should.be.instanceOf(Array);
                    versions.forEach(function(version){
                        version.should.have.property('version');
                    });
                });
        });
    });
});