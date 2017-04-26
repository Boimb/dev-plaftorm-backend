describe('module', function () {
    describe('.create()', function () {
        it('should create a module', function () {
            const Module = require(__base + 'core/api/module/model/module.js');
            var params = {
                name: 'Jean',
                img: 'http://test.fr',
                url: 'https://github.com/test/gladys-test',
                slug: 'test',
                min_gladys_version: 3,
                max_gladys_version: 3
            };
            var userId = '08530e76-0318-4557-98a7-e570ec0a31db';
            return Module.create(userId, params)
                .then((createdModule) => {
                    createdModule.should.have.property('name');
                    createdModule.should.have.property('img');
                    createdModule.should.have.property('user_id', userId);
                });
        });
    });
});