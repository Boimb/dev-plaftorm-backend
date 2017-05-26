describe('user', function () {
    describe('.resetPassword()', function () {
        it.only('should send a confirmation link', function () {
            const user = require(__base + 'core/api/user/model/user.js');
            
             var params = {
                 email: 'tony.stark@test.fr'
             };

            return user.resetPassword(params)
                .then((result) => {
                    result.should.have.property('success', true);
                });
        });
    });
});