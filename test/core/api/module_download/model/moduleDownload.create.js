describe('moduleDownload', function () {
    describe('.create()', function () {
        it('should create a moduleDownload', function () {
            const ModuleDownload = require(__base + 'core/api/module_download/model/moduleDownload.js');
            
            var params = {
                module_version_id: '27467ab0-4b96-4da7-8e9d-d0f8acb3bd14',
                instance_id: '5b87a6fb-0e3d-4220-aaef-35351073d094',
                source: 'gladys,v3.0.0'
            };

            return ModuleDownload.create('51.12.12.0', params)
                .then((createdModuleDownload) => {
                    createdModuleDownload.should.have.property('module_version_id');
                    createdModuleDownload.should.have.property('network_hash');
                });
        });
    });
});