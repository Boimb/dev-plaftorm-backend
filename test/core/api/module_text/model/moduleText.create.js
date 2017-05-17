describe('moduleText', function () {
    describe('.create()', function () {
        it('should add a moduleText to a module', function () {

            const ModuleText = require(__base + 'core/api/module_text/model/moduleText.js');
            
            var params = {
                module_id: '7b9f5d68-bd3d-4619-9036-b65e442d1636',
                language: 'fr',
                description: 'This is a description, it is the right length, perfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeect',
                instruction_markdown: 'this is markdown !!!!!!!!!!!!<script>alert()</script>'
            };

            var user = {id: '08530e76-0318-4557-98a7-e570ec0a31db'};
            
            return ModuleText.create(user, params)
                .then((createdModule) => {
                    createdModule.should.have.property('module_id');
                    createdModule.should.have.property('description');
                    createdModule.should.have.property('instruction_markdown');

                    // script should be XSS protected
                    createdModule.should.have.property('instruction_html', '<p>this is markdown !!!!!!!!!!!!&lt;script&gt;alert()&lt;/script&gt;</p>');
                });
        });
    });
});