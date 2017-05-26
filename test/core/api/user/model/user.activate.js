describe('user', function () {
    describe('.activate()', function () {
        it('should activate account', function () {

            const user = require(__base + 'core/api/user/model/user.js');
        
            return user.activate('e09b11bf-5e17-4043-b0a0-967ce2884d76')
                .then((result) => {
                    result.should.have.property('success', true);
                });
        });

        it('should not activate account', function () {

            const user = require(__base + 'core/api/user/model/user.js');
        
            return user.activate('THIS TOKEN IS WRONG')
                .then((result) => {
                    throw "SHOULD NOT VALIDATE THIS TOKEN";
                })
                .catch(() => true);
        });
    });
});