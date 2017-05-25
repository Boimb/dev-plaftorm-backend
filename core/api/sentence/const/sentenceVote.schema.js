const Joi = require('joi');

var schema = Joi.object().keys({
    user_id: Joi.string().uuid().required(),
    sentence_id: Joi.string().uuid().required(),
    vote: Joi.number().required().valid([-1, 1])
});

module.exports = schema;