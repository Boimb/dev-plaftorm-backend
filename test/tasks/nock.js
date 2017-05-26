const nock = require('nock');

var mailgun = nock('https://api.mailgun.net:443')
                .post('/v3/domain/messages')
                .reply(200, 'ok');