describe('moduleVersion', function () {
    describe('.create()', function () {
        it('should add a moduleVersio to a module', function () {

            const ModuleVersion = require(__base + 'core/api/module_version/model/moduleVersion.js');

            var params = {
                module_id: '7b9f5d68-bd3d-4619-9036-b65e442d1636',
                version: '1.0.0'
            };

            var user = {
                id: '08530e76-0318-4557-98a7-e570ec0a31db'
            };

            return ModuleVersion.create(user, params)
                .then((createdModuleVersion) => {
                    createdModuleVersion.should.have.property('module_id');
                    createdModuleVersion.should.have.property('version');
                });
        });
    });
});