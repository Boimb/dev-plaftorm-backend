describe('sentence', function () {
    describe('.create()', function () {
        it('should create a sentence', function () {

            const Sentence = require(__base + 'core/api/sentence/model/sentence.js');
            
            var params = {
                text: 'How are you ?'
            };

            var user = {id: '08530e76-0318-4557-98a7-e570ec0a31db'};
            
            return Sentence.create(user, params)
                .then((createdSentence) => {
                    createdSentence.should.have.property('user_id');
                    createdSentence.should.have.property('text');
                });
        });
    });
});