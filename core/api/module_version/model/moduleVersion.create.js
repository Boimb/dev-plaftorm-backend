module.exports = create;

const schema = require('../const/moduleVersion.schema.js');
const Joi = require('joi');
const Promise = require('bluebird');
const validate = Promise.promisify(Joi.validate);
const db = require(__base + 'core/service/db.js');
const config = require(__base + 'config.js');
const hasRight = require('../../module/model/module.hasRight');

function create(user, params) {

    return hasRight(user.id, params.module_id)
        .then(() => validate(params, schema, {stripUnknown: true}))
        .then((moduleVersion) => db.insert('t_module_version', moduleVersion));
}