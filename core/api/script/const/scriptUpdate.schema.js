const Joi = require('joi');

var schema = Joi.object().keys({
    name: Joi.string().required(),
    code: Joi.string().required(),
    description: Joi.string().required(),
    instruction_markdown: Joi.string().required()
});

module.exports = schema;