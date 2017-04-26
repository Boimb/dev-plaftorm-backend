global.__base = __dirname + '/../';
const should = require('should');
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