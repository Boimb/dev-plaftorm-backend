const request = require('supertest');
const app = require(__base + 'app.js');

describe('module', function () {
    describe('GET /module?lang=en&take=20&skip=0', function () {
        it('should get a module', function () {

            return request(app)
                .get('/module?lang=en&take=20&skip=0')
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