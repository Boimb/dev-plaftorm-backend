describe('script', function () {
    describe('.getByUser()', function () {
        it('should get a script created by a user', function () {

            const Script = require(__base + 'core/api/script/model/script.js');

            var user = {id: '08530e76-0318-4557-98a7-e570ec0a31db'};
            
            return Script.getByUser(user, 20, 0)
                .then((scripts) => {
                    scripts.should.be.instanceOf(Array);
                    scripts.forEach(function(script){
                        script.should.have.property('id');
                        script.should.have.property('name');
                        script.should.have.property('author');
                        script.should.have.property('updated_at');
                    });
                });
        });
    });
});