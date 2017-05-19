describe('module', function () {
    describe('.get()', function () {
        it('should get module with pagination', function () {
            
            const Module = require(__base + 'core/api/module/model/module.js');

            return Module.get('en', 20, 0)
                .then((modules) => {
                    modules.should.be.instanceOf(Array);
                    modules.length.should.not.equal(0);
                    modules.forEach(function(module) {
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