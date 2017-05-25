module.exports = update;

const schema = require('../const/scriptUpdate.schema.js');
const Joi = require('joi');
const Promise = require('bluebird');
const validate = Promise.promisify(Joi.validate);
const db = require(__base + 'core/service/db.js');
const config = require(__base + 'config.js');
const hasRight = require('./script.hasRight');
const showdown  = require('showdown');
const converter = new showdown.Converter();
const xss = require('xss');
const myXss = new xss.FilterXSS({
    whiteList: {
        a: ['href'],
        h4: [],
        p: [],
        pre: [],
        code: [],
        ul: [],
        li: [],
        strong: [],
        img: ['src']  
    }
});

function update(user, id, params) {

    return hasRight(user.id, id)
        .then(() => validate(params, schema, {stripUnknown: true}))
        .then((script) => {
            
            // convert markdown to html
            var html = converter.makeHtml(script.instruction_markdown);

            // remove unwanted HTML balise
            html = myXss.process(html);

            // put all links to rel nofollow
            html = html.replace('<a ', '<a rel="nofollow" ');

            // add class="img-responsive" to all image
            html = html.replace('<img ', '<img class="img-responsive" ');

            script.instruction_html = html;

            return db.updateOne('t_script', ['id = ?', id], script);
        });
}