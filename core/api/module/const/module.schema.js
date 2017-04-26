const Joi = require('joi');

var schema = Joi.object().keys({
    user_id: Joi.string().uuid().required(),
    name: Joi.string().token().required(),
    img: Joi.string().uri().required(),
    url: Joi.string().uri().regex(/gladys-/).required(),
    slug: Joi.string().token().required(),
    min_gladys_version: Joi.number().required(),
    max_gladys_version: Joi.number().required()
});

module.exports = schema;