const request = require('supertest');
const app = require(__base + 'app.js');

describe('script', function () {
    describe('POST /script', function () {
        it('should create a script', function () {

            var params = {
                name: 'This is my best script',
                code: 'console.log("hey");',
                description: 'This is a description, it is the right length, perfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeect',
                instruction_markdown: 'this is markdown !!!!!!!!!!!!<script>alert()</script>'
            };

            return request(app)
                .post('/script')
                .set('Authorization', 'JWT ' + process.env.TEST_JWT)
                .send(params)
                .expect(201)
                .then((response) => {
                    response.body.should.have.property('instruction_html');
                });
        });
    });
});