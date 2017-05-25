describe('script', function () {
    describe('.create()', function () {
        it('should create a script', function () {

            const Script = require(__base + 'core/api/script/model/script.js');
            
            var params = {
                name: 'This is my best script',
                code: 'console.log("hey");',
                description: 'This is a description, it is the right length, perfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeect',
                instruction_markdown: 'this is markdown !!!!!!!!!!!!<script>alert()</script>'
            };

            var user = {id: '08530e76-0318-4557-98a7-e570ec0a31db'};
            
            return Script.create(user, params)
                .then((createdScript) => {
                    createdScript.should.have.property('name');
                    createdScript.should.have.property('description');
                    createdScript.should.have.property('instruction_markdown');

                    // script should be XSS protected
                    createdScript.should.have.property('instruction_html', '<p>this is markdown !!!!!!!!!!!!&lt;script&gt;alert()&lt;/script&gt;</p>');
                });
        });
    });
});