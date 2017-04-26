describe('user', function () {
    describe('.login()', function () {
        it('should login a user', function () {
            const user = require(__base + 'core/api/user/model/user.js');
            var params = {
                email: 'tony.stark@test.fr',
                password: 'testtests'
            };
            return user.login(params)
                .then((createdUser) => {
                    createdUser.should.have.property('name');
                    createdUser.should.have.property('email'); 
                    createdUser.should.have.property('refresh_token');
                    createdUser.should.have.property('access_token');
                    createdUser.should.not.have.property('password');
                });
        });

        it('should not login a user. Invalid password.', function () {
            const user = require(__base + 'core/api/user/model/user.js');
            var params = {
                email: 'tony.stark@test.fr',
                password: 'INVALID_PASSWORD'
            };
            return user.login(params)
                .then((createdUser) => {
                    throw 'Should not login user';
                })
                .catch((err) => {
                    err.message.should.equal('LOGIN_INVALID_PASSWORD');
                });
        });
    });
});