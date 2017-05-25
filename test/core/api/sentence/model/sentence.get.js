describe('sentence', function () {
    describe('.get()', function () {
        it('should get sentences', function () {

            const Sentence = require(__base + 'core/api/sentence/model/sentence.js');
            
            return Sentence.get(20, 0)
                .then((sentences) => {
                    sentences.should.be.instanceOf(Array);
                    sentences.forEach(function(sentence){
                        sentence.should.have.property('text');
                        sentence.should.have.property('author');
                        sentence.should.have.property('note');
                    })
                });
        });
    });
});