describe('instance', function () {
    describe('.create()', function () {
        it('should create an instance', function () {

            const Instance = require(__base + 'core/api/instance/model/instance.js');
            
            var params = {
                version: '3.5.2',
                os: 'Linux',
                platform: 'armv61',
                node_version: '6.3.1',
                latitude: 45.3,
                longitude: 34.3,
                city: 'Paris',
                zipcode: '75001',
                country: 'France'
            };

            return Instance.create(params)
                .then((createdInstance) => {
                    createdInstance.should.have.property('id');
                });
        });
    });
});