describe('script', function () {
    describe('.get()', function () {
        it('should get list of script', function () {

            const Script = require(__base + 'core/api/script/model/script.js');
            
            return Script.get(30, 0)
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