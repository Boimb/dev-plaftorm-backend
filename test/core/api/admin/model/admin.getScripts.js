describe('admin', function () {
    describe('.getScripts()', function () {
        it('should get scripts', function () {

            const Admin = require(__base + 'core/api/admin/model/admin.js');

            return Admin.getScripts()
                .then((scripts) => {
                    scripts.should.be.instanceOf(Array);
                    scripts.forEach(function(script){
                        script.should.have.property('name');
                        script.should.have.property('online', false);
                    });
                });
        });
    });
});