describe('module', function () {
    describe('.update()', function () {
        it('should update a module', function () {
            const Module = require(__base + 'core/api/module/model/module.js');
            
            var params = {
                img: 'http://test.fr',
                url: 'https://github.com/test/gladys-test',
                min_gladys_version: '3.1.4',
                max_gladys_version: '3.2.1'
            };

            var user = {id: '08530e76-0318-4557-98a7-e570ec0a31db'};

            return Module.update(user, '7b9f5d68-bd3d-4619-9036-b65e442d1636', params)
                .then((updatedModule) => {
                    updatedModule.should.have.property('name');
                    updatedModule.should.have.property('url', params.url);
                    updatedModule.should.have.property('user_id', user.id);
                });
        });
    });
});