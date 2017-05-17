const request = require('supertest');
const app = require(__base + 'app.js');

describe('moduleText', function () {
    describe('POST /module_text', function () {
        it('should create a moduleText', function () {

            var params = {
                module_id: '7b9f5d68-bd3d-4619-9036-b65e442d1636',
                language: 'fr',
                description: 'This is a description, it is the right length, perfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeect',
                instruction_markdown: 'this is markdown !!!!!!!!!!!!<script>alert()</script>'
            };

            return request(app)
                .post('/module_text')
                .set('Authorization', 'JWT ' + process.env.TEST_JWT)
                .send(params)
                .expect(201)
                .then((response) => {
                    response.body.should.have.property('instruction_html');
                });
        });
    });
});