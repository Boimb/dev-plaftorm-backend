describe('moduleText', function () {
    describe('.getByModule()', function () {
        it('should get module Texts by module', function () {

            const ModuleText = require(__base + 'core/api/module_text/model/moduleText.js');

            var user = {id: '08530e76-0318-4557-98a7-e570ec0a31db'};
            
            return ModuleText.getByModule(user, '7b9f5d68-bd3d-4619-9036-b65e442d1636', 20, 0)
                .then((texts) => {
                    texts.should.be.instanceOf(Array);
                    texts.forEach(function(text){
                        text.should.have.property('instruction_markdown');
                    });
                });
        });
    });
});