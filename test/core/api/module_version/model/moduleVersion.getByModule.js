describe('moduleVersion', function () {
    describe('.getByModule()', function () {
        it('should get versions of a module', function () {

            const ModuleVersion = require(__base + 'core/api/module_version/model/moduleVersion.js');

            return ModuleVersion.getByModule('7b9f5d68-bd3d-4619-9036-b65e442d1636')
                .then((versions) => {
                    versions.should.be.instanceOf(Array);
                    versions.forEach(function(version){
                        version.should.have.property('version');
                    });
                });
        });
    });
});