describe('script', function () {
    describe('.update()', function () {
        it('should update a script', function () {

            const Script = require(__base + 'core/api/script/model/script.js');
            
            var params = {
                name: 'This is a new DESCRIPTION',
                code: 'console.log("hey");',
                description: 'This is a description, it is the right length, perfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeect',
                instruction_markdown: 'NEW_MARKDWON'
            };

            var user = {id: '08530e76-0318-4557-98a7-e570ec0a31db'};
            
            return Script.update(user, '611ed8d7-34d1-4aac-8aa6-2911b4bdbb97' , params)
                .then((updatedScript) => {
                    updatedScript.should.have.property('name');
                    updatedScript.should.have.property('description');
                    updatedScript.should.have.property('instruction_markdown');

                    // script should be XSS protected
                    updatedScript.should.have.property('instruction_html', '<p>NEW_MARKDWON</p>');
                });
        });
    });
});