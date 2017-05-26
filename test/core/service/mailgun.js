describe('mailgun', function () {
    describe('.send()', function () {
        it('should send an email', function () {
            const nock = require('nock');

            var mailgunNock = nock('https://api.mailgun.net')
                            .post('/v3/domain/messages')
                            .reply(200, 'ok');

            const mailgun = require(__base + 'core/service/mailgun.js');

            var user = {
                email: 'tony.stark@test.fr',
                language: 'en'
            };
            
            return mailgun.send(user, 'confirmation', {confirmationUrl: 'https://gladysproject.com'});
        });
    });
});