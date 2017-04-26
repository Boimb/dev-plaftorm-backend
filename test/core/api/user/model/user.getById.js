describe('user', function () {
    describe('.getById()', function () {
        it('should return a user', function () {
            const user = require(__base + 'core/api/user/model/user.js');
            
            return user.getById('08530e76-0318-4557-98a7-e570ec0a31db')
                .then((updatedUser) => {
                    updatedUser.should.have.property('name');
                    updatedUser.should.have.property('email'); 
                });
        });

         it('should return error NOT_FOUND', function () {
            const user = require(__base + 'core/api/user/model/user.js');
            
            return user.getById('05bf1c87-160b-43c8-8e77-e834853cf266')
                .then((updatedUser) => {
                    throw 'should return error';
                })
                .catch((err) => {
                    err.message.should.equal('NOT_FOUND');
                });
        });
    });
});