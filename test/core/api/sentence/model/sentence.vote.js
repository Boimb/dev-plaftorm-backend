describe('sentence', function () {
    describe('.vote()', function () {
        it('should vote for a sentence', function () {

            const Sentence = require(__base + 'core/api/sentence/model/sentence.js');
            
            var user = {id: '08530e76-0318-4557-98a7-e570ec0a31db'};

            return Sentence.vote(user, '4ba105f0-c986-4770-8c01-536bc2a3a640', -1)
                .then((vote) => {
                    vote.should.have.property('sentence_id');
                    vote.should.have.property('user_id');
                    vote.should.have.property('vote', -1);
                });
        });
    });
});