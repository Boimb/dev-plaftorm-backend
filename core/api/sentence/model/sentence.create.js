module.exports = create;

const schema = require('../const/sentence.schema.js');
const Joi = require('joi');
const Promise = require('bluebird');
const validate = Promise.promisify(Joi.validate);
const db = require(__base + 'core/service/db.js');

function create(user, params) {

    params.user_id = user.id;

    return validate(params, schema, {stripUnknown: true})
        .then((sentence) => db.insert('t_sentence', sentence));
}