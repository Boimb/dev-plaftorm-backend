const Joi = require('joi');

var schema = Joi.object().keys({
    img: Joi.string().uri(),
    url: Joi.string().uri().regex(/gladys-/),
    min_gladys_version: Joi.number(),
    max_gladys_version: Joi.number()
});

module.exports = schema;