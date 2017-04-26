describe('user', function () {
    describe('.update()', function () {
        it('should update a user', function () {
            const user = require(__base + 'core/api/user/model/user.js');
            var params = {
                name: 'My_beautiful_Name',
                email: 'tony.stark@test.fr',
                password: 'dkldksmlfkmlsdkmflsk'
            };
            return user.update('08530e76-0318-4557-98a7-e570ec0a31db', params)
                .then((updatedUser) => {
                    updatedUser.should.have.property('name', params.name);
                    updatedUser.should.have.property('email'); 
                    updatedUser.should.not.have.property('password');
                });
        });
    });
});