const request = require('supertest');
const app = require(__base + 'app.js');

describe('script', function () {
    describe('GET /script/:id', function () {
        it('should get a script by id', function () {

            return request(app)
                .get('/script/611ed8d7-34d1-4aac-8aa6-2911b4bdbb97')
                .expect(200)
                .then((response) => {
                    response.body.should.have.property('instruction_html');
                });
        });
    });
});