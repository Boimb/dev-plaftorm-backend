module.exports = update;

const schema = require('../const/instance.schema.js');
const Joi = require('joi');
const Promise = require('bluebird');
const validate = Promise.promisify(Joi.validate);
const db = require(__base + 'core/service/db.js');
const config = require(__base + 'config.js');

function update(id, params) {

    return validate(params, schema, {stripUnknown: true})
        .then((instance) => db.updateOne('t_instance', ['id = ?', id], instance));
}