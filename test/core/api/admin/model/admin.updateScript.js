describe('admin', function () {
    describe('.updateScript()', function () {
        it('should update a script', function () {

            const Admin = require(__base + 'core/api/admin/model/admin.js');

            return Admin.updateScript('611ed8d7-34d1-4aac-8aa6-2911b4bdbb97', {online: true})
                .then((script) => {
                    script.should.have.property('online', true);
                });
        });
    });
});