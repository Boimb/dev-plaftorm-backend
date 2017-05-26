const config = require(__base + 'config.js');
const mailgun = require('mailgun-js')({apiKey: config.mailgun.apiKey, domain: config.mailgun.domain});
const Promise = require('bluebird');
const ejs = require('ejs');
const fs = require('fs');

const emails = require(__base + 'core/const/emails.js');

const TEMPLATES = {
    en: {
       confirmation: ejs.compile(fs.readFileSync(__base + 'core/const/email_template/en/confirmation.ejs', 'utf8')), 
       notification: ejs.compile(fs.readFileSync(__base + 'core/const/email_template/en/notification.ejs', 'utf8')), 
       password_reset: ejs.compile(fs.readFileSync(__base + 'core/const/email_template/en/password_reset.ejs', 'utf8'), 'utf8'), 
    },
    fr: {
       confirmation: ejs.compile(fs.readFileSync(__base + 'core/const/email_template/fr/confirmation.ejs', 'utf8')), 
       notification: ejs.compile(fs.readFileSync(__base + 'core/const/email_template/fr/notification.ejs', 'utf8')), 
       password_reset: ejs.compile(fs.readFileSync(__base + 'core/const/email_template/fr/password_reset.ejs', 'utf8')), 
    }
};

module.exports.send = function send(user, template, scope) {

    if(!TEMPLATES[user.language] || !TEMPLATES[user.language][template]){
        return Promise.reject(new Error('INVALID_TEMPLATE_OR_LANGUAGE'));
    }

    // generating HTML base on EJS and scope
    const html = TEMPLATES[user.language][template](scope);

    var data = {
        from: config.email.from,
        to: user.email,
        subject: emails[template][user.language].subject,
        html: html
    };

    return new Promise(function(resolve, reject){
        mailgun.messages().send(data, function (error, body) {
            if(error) return reject(error);

            return resolve(body);
        });
    });
};