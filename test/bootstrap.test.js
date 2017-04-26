global.__base = __dirname + '/../';
const should = require('should');
const cleanDb = require('./tasks/cleanDb.js');
const fillDb = require('./tasks/fillDb.js');

before(function() {
    const app = require('../app.js');
});

after(function() {

});

beforeEach(function() {
    return cleanDb().then(() => fillDb());
});

afterEach(function() {

});