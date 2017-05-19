const request = require('supertest');
const app = require(__base + 'app.js');

describe('moduleReview', function () {
    describe('GET /module/:id/review', function () {
        it('should get review from a module', function () {

            return request(app)
                .post('/module/7b9f5d68-bd3d-4619-9036-b65e442d1636/review')
                .expect(200)
                .then((response) => {
                    var reviews = response.body;

                    reviews.should.be.instanceOf(Array);
                    reviews.forEach(function(review){
                        review.should.have.property('text');
                        review.should.have.property('note');
                    });
                });
        });
    });
});