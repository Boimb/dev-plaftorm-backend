const request = require('supertest');
const app = require(__base + 'app.js');

describe('moduleText', function () {
    describe('GET /account/module/:id/text', function () {
        it('should return text of modules', function () {

            return request(app)
                .get('/account/module/7b9f5d68-bd3d-4619-9036-b65e442d1636/text')
                .set('Authorization', 'JWT ' + process.env.TEST_JWT)
                .expect(200)
                .then((response) => {
                    var texts = response.body;
                    texts.should.be.instanceOf(Array);
                    texts.forEach(function(text){
                        text.should.have.property('instruction_markdown');
                    });
                });
        });
    });
});