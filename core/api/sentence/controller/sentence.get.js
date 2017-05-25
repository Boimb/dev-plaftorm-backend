const Sentence = require('../model/sentence.js');

module.exports = function(req, res, next) {
    Sentence.get(req.query.take, req.query.skip)
        .then((sentences) => res.json(sentences))
        .catch(next);
};