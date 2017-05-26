global.__base = __dirname + '/../';
const should = require('should');
const cleanDb = require('./tasks/cleanDb.js');
const cleanRedis = require('./tasks/cleanRedis.js');
const fillRedis = require('./tasks/fillRedis.js');
const fillDb = require('./tasks/fillDb.js');
const nock = require('./tasks/nock.js');

before(function() {
    const app = require('../app.js');
});

after(function() {

});

beforeEach(function() {
    return cleanDb()
        .then(() => fillDb())
        .then(() => cleanRedis())
        .then(() => fillRedis());
});

afterEach(function() {

});