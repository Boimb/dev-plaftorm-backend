describe('admin', function () {
    describe('.updateModule()', function () {
        it('should update a module', function () {

            const Admin = require(__base + 'core/api/admin/model/admin.js');

            return Admin.updateModule('7b9f5d68-bd3d-4619-9036-b65e442d1636', {online: true})
                .then((module) => {
                    module.should.have.property('online', true);
                });
        });
    });
});