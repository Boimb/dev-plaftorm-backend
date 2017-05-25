module.exports = vote;

const db = require(__base + 'core/service/db.js');
const request = require('../const/request');
const schema = require('../const/sentenceVote.schema.js');
const Joi = require('joi');
const Promise = require('bluebird');
const validate = Promise.promisify(Joi.validate);

function vote(user, sentenceId, vote) {

    var params = {
        sentence_id: sentenceId,
        user_id: user.id,
        vote: vote
    };

    // try to insert 
    return  validate(params, schema, {stripUnknown: true})
        .then((sentenceVote) => {
            
            return db.insert('t_sentence_vote', sentenceVote)
        })
        // if it fails, the vote already exist, updating it
        .catch((err) => {
            if(err.sqlState === '23505') return db.queryUnique(request.updateVote, [user.id, sentenceId, vote]);
            else throw err;
        });
}