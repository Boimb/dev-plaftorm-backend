describe('moduleReview', function () {
    describe('.getByModule()', function () {
        it('should get reviews from a module', function () {
            const ModuleReview = require(__base + 'core/api/module_review/model/moduleReview.js');
            
            return ModuleReview.getByModule('7b9f5d68-bd3d-4619-9036-b65e442d1636', 20, 0)
                .then((reviews) => {
                    reviews.should.be.instanceOf(Array);
                    reviews.forEach(function(review){
                        review.should.have.property('text');
                        review.should.have.property('note');
                    });
                });
        });
    });
});