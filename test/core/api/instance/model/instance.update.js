describe('instance', function () {
    describe('.update()', function () {
        it('should update an instance', function () {

            const Instance = require(__base + 'core/api/instance/model/instance.js');
            
            var params = {
                version: '3.5.2',
                os: 'MacOS',
                platform: 'armv61',
                node_version: '6.3.1',
                latitude: 45.3,
                longitude: 34.3,
                city: 'Paris',
                zipcode: '75001',
                country: 'France'
            };

            return Instance.update('5b87a6fb-0e3d-4220-aaef-35351073d094','212.232.51.35', params)
                .then((updatedInstance) => {
                    updatedInstance.should.have.property('id');
                    updatedInstance.should.have.property('os', 'MacOS');
                });
        });
    });
});