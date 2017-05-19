const Joi = require('joi');

var schema = Joi.object().keys({
    user_id: Joi.string().uuid().required(),
    name: Joi.string().token().required(),
    img: Joi.string().uri().required(),
    url: Joi.string().uri().regex(/gladys-/).required(),
    slug: Joi.string().token().required(),
    min_gladys_version: Joi.string().regex(/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(-(0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(\.(0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*)?(\+[0-9a-zA-Z-]+(\.[0-9a-zA-Z-]+)*)?$/).required(),
    max_gladys_version: Joi.string().regex(/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(-(0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(\.(0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*)?(\+[0-9a-zA-Z-]+(\.[0-9a-zA-Z-]+)*)?$/).required()
});

module.exports = schema;