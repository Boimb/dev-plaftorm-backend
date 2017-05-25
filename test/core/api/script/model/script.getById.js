describe('script', function () {
    describe('.getById()', function () {
        it('should get a script by id', function () {

            const Script = require(__base + 'core/api/script/model/script.js');
            
            return Script.getById('611ed8d7-34d1-4aac-8aa6-2911b4bdbb97')
                .then((script) => {
                    script.should.have.property('id', '611ed8d7-34d1-4aac-8aa6-2911b4bdbb97');
                    script.should.have.property('name');
                    script.should.have.property('code');
                    script.should.have.property('instruction_html');
                    script.should.have.property('author');
                    script.should.have.property('updated_at');
                });
        });
    });
});