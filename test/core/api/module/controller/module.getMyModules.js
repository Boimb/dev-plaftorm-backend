const request = require('supertest');
const app = require(__base + 'app.js');

describe('module', function () {
    describe('GET /account/module', function () {
        it('should get modules from a user', function () {

            return request(app)
                .get('/account/module')
                .set('Authorization', 'JWT ' + process.env.TEST_JWT)
                .expect(200)
                .then((response) => {
                    var modules = response.body;

                    modules.should.be.instanceOf(Array);
                    modules.length.should.not.equal(0);
                    modules.forEach(function(module) {
                        module.should.have.property('id');
                        module.should.have.property('slug');
                        module.should.have.property('author');
                        module.should.have.property('version');
                        module.should.have.property('review');
                        module.should.have.property('img');
                    });
                });
        });
    });
});