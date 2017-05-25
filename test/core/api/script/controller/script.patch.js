const request = require('supertest');
const app = require(__base + 'app.js');

describe('script', function () {
    describe('PATCH /script/:id', function () {
        it('should update a script', function () {

            var params = {
                name: 'This is my best script',
                code: 'console.log("hey");',
                description: 'This is a description, it is the right length, perfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeect',
                instruction_markdown: 'this is markdown !!!!!!!!!!!!<script>alert()</script>'
            };

            return request(app)
                .patch('/script/611ed8d7-34d1-4aac-8aa6-2911b4bdbb97')
                .set('Authorization', 'JWT ' + process.env.TEST_JWT)
                .send(params)
                .expect(200)
                .then((response) => {
                    response.body.should.have.property('instruction_html');
                });
        });
    });
});