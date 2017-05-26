describe('admin', function () {
    describe('.getModules()', function () {
        it('should get modules', function () {

            const Admin = require(__base + 'core/api/admin/model/admin.js');

            return Admin.getModules()
                .then((modules) => {
                    modules.should.be.instanceOf(Array);
                    modules.forEach(function(module){
                        module.should.have.property('name');
                        module.should.have.property('online', false);
                    });
                });
        });
    });
});