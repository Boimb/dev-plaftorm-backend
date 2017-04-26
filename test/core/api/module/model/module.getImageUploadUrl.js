describe('module', function () {
    describe('.getImageUploadUrl()', function () {
        it('should return url', function () {
            const Module = require(__base + 'core/api/module/model/module.js');
            var params = {
                filename: 'test.jpg'
            };
            return Module.getImageUploadUrl(params)
                .then((response) => {
                    response.should.have.property('url');
                });
        });

        it('should return incorrect file format', function () {
            const Module = require(__base + 'core/api/module/model/module.js');
            var params = {
                filename: 'test.zip'
            };
            return Module.getImageUploadUrl(params)
                .then((response) => {
                    throw 'should have returned error';
                })
                .catch((err) => {
                    err.message.should.equal('INCORRECT_FILE_FORMAT');
                });
        });
    });
});