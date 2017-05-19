const request = require('supertest');
const app = require(__base + 'app.js');

describe('module', function () {
    describe('GET /module/:id', function () {
        it('should get a module by id', function () {

            return request(app)
                .get('/module/7b9f5d68-bd3d-4619-9036-b65e442d1636')
                .expect(200)
                .then((response) => {
                    var module = response.body;

                    module.should.have.property('id');
                    module.should.have.property('slug');
                    module.should.have.property('author');
                    module.should.have.property('url');
                    module.should.have.property('instruction_html');
                    module.should.have.property('version');
                    module.should.have.property('review');
                    module.should.have.property('img');
                });
        });
    });
});