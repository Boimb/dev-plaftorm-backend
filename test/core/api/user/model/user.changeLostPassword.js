describe('user', function () {
    describe('.changeLostPassword()', function () {
        it('should change user password', function () {
            const user = require(__base + 'core/api/user/model/user.js');
        
            return user.changeLostPassword('023e7f31-7598-4458-a29c-105e35dfed11', {password: 'thisismynewpassword'})
                .then((result) => {
                    result.should.have.property('id');
                });
        });
    });
});