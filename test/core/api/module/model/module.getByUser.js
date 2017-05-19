describe('module', function () {
    describe('.getByUser()', function () {
        it('should get modules by user', function () {
            
            const Module = require(__base + 'core/api/module/model/module.js');
            
            var user = {id: '08530e76-0318-4557-98a7-e570ec0a31db'};

            return Module.getByUser(user, 'en')
                .then((modules) => {
                    modules.forEach(function(module){
                        module.should.have.property('id');
                        module.should.have.property('slug');
                        module.should.have.property('author');
                        module.should.have.property('version');
                        module.should.have.property('review');
                        module.should.have.property('img');
                    });
                });
        });
    });
});