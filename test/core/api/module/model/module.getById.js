describe('module', function () {
    describe('.getById()', function () {
        it('should get module by id', function () {
            
            const Module = require(__base + 'core/api/module/model/module.js');

            return Module.getById('7b9f5d68-bd3d-4619-9036-b65e442d1636','en')
                .then((module) => {
                    module.should.have.property('id');
                    module.should.have.property('slug');
                    module.should.have.property('url');
                    module.should.have.property('instruction_html');
                    module.should.have.property('author');
                    module.should.have.property('version');
                    module.should.have.property('review');
                    module.should.have.property('img');
                });
        });
    });
});