describe('instance', function () {
    describe('.create()', function () {
        it('should create an instance', function () {

            const Instance = require(__base + 'core/api/instance/model/instance.js');
            
            var params = {
                version: '3.5.2',
                os: 'Linux',
                platform: 'armv61',
                node_version: '6.3.1'
            };

            return Instance.create('212.232.51.35', params)
                .then((createdInstance) => {
                    createdInstance.should.have.property('id');
                });
        });
    });
});