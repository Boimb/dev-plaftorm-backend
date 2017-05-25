const Sentence = require('../model/sentence.js');

module.exports = function(req, res, next) {
    Sentence.vote(req.user, req.params.id, req.body.vote)
        .then((vote) => res.json(vote))
        .catch(next);
};