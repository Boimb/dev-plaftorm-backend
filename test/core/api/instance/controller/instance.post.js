const request = require('supertest');
const app = require(__base + 'app.js');

describe('instance', function () {
    describe('POST /instance', function () {
        it('should create an instance', function () {

            var params = {
                version: '3.5.2',
                os: 'Linux',
                platform: 'armv61',
                node_version: '6.3.1',
                latitude: 45.3,
                longitude: 34.3,
                city: 'Paris',
                zipcode: '75001',
                country: 'France'
            };

            return request(app)
                .post('/instance')
                .set('Authorization', 'JWT ' + process.env.TEST_JWT)
                .send(params)
                .expect(201)
                .then((response) => {
                    response.body.should.have.property('id');
                });
        });
    });
});