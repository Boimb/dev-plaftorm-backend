describe('user', function () {
    describe('.create()', function () {
        it('should create a user', function () {
            const user = require(__base + 'core/api/user/model/user.js');
            var params = {
                name: 'Jean',
                email: 'jean.test@test.fr',
                language: 'en',
                password: 'testtests'
            };
            return user.create(params)
                .then((createdUser) => {
                    createdUser.should.have.property('name');
                    createdUser.should.have.property('email'); 
                    createdUser.should.have.property('access_token');
                    createdUser.should.not.have.property('password');
                });
        });

        it('should not create a user. Invalid params', function () {
            const user = require(__base + 'core/api/user/model/user.js');
            var params = {
                name: 'Jean',
                password: 'testtests'
            };
            return user.create(params)
                .then((createdUser) => {
                    throw "User should not be created";
                })
                .catch((err) => {
                    
                });
        });

        it('should not create a user. Email already exist', function () {
            const user = require(__base + 'core/api/user/model/user.js');
            var params = {
                name: 'Jean',
                email: 'tony.stark@test.fr',
                language: 'en',
                password: 'testtests'
            };
            return user.create(params)
                .then((createdUser) => {
                    throw "User should not be created";
                })
                .catch((err) => {
                    err.message.should.equal('USER_EMAIL_ALREADY_EXIST');
                });
        });
    });
});