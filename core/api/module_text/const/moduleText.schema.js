const Joi = require('joi');

var schema = Joi.object().keys({
    module_id: Joi.string().uuid().required(),
    language: Joi.string().length(2).required(),
    description: Joi.string().min(70).max(115).required(),
    instruction_markdown: Joi.string().min(10).required()
});

module.exports = schema;