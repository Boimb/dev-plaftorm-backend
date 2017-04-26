global.__base = __dirname + '/../';

const cleanDb = require('./tasks/cleanDb.js');

before(function() {
    const app = require('../app.js');
});

after(function() {

});

beforeEach(function() {
    return cleanDb();
});

afterEach(function() {

});