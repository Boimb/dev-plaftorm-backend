const Joi = require('joi');

var schema = Joi.object().keys({
    version: Joi.string(),
    os: Joi.string(),
    platform: Joi.string(),
    node_version: Joi.string(),
    latitude: Joi.number(),
    longitude: Joi.number(),
    city: Joi.string(),
    zipcode: Joi.string(),
    country: Joi.string()
});

module.exports = schema;