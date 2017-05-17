const Joi = require('joi');

var schema = Joi.object().keys({
    version: Joi.string().allow(null),
    os: Joi.string().allow(null),
    platform: Joi.string().allow(null),
    node_version: Joi.string().allow(null),
});

module.exports = schema;