module.exports.create = create;

const schema = require('../const/module.schema.js');
const Joi = require('joi');
const Promise = require('bluebird');
const validate = Promise.promisify(Joi.validate);
const db = require(__base + 'core/service/db.js');
const config = require(__base + 'config.js');

function create(userId, params) {

    params.user_id = userId;

    return validate(params, schema, {stripUnknown: true})
        .then((module) => db.insert('t_module', module));
}