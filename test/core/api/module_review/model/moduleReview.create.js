describe('moduleReview', function () {
    describe('.create()', function () {
        it('should create a moduleReview', function () {
            const ModuleReview = require(__base + 'core/api/module_review/model/moduleReview.js');
            var params = {
                module_id: '7b9f5d68-bd3d-4619-9036-b65e442d1636',
                note: 5,
                text: 'this is a nice module'
            };
            var user = {
                id: '08530e76-0318-4557-98a7-e570ec0a31db'
            };
            return ModuleReview.create(user, params)
                .then((createdModuleReview) => {
                    createdModuleReview.should.have.property('module_id');
                    createdModuleReview.should.have.property('note');
                    createdModuleReview.should.have.property('text');
                    createdModuleReview.should.have.property('user_id', user.id);
                });
        });
    });
});