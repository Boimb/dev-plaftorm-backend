const Sentence = require('../model/sentence.js');

module.exports = function(req, res, next) {
    Sentence.create(req.user, req.body)
        .then((newSentence) => res.status(201).json(newSentence))
        .catch(next);
};