describe('s3', function () {
    describe('.createSignedUrl()', function () {
        it('should return a signed url', function () {
            this.timeout(6000);
            const s3 = require(__base + 'core/service/s3.js');
            
            return s3.createSignedUrl('dossier', 'file.txt');
        });
    });
});