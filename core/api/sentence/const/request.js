module.exports = {
    get: `
        SELECT t_sentence.*, t_user.name as author, SUM(t_sentence_vote.vote) as note 
        FROM t_sentence
        LEFT JOIN t_sentence_vote ON t_sentence_vote.sentence_id = t_sentence.id
        JOIN t_user ON t_user.id = t_sentence.user_id
        GROUP BY t_sentence.id, t_user.name
        ORDER BY note DESC
        LIMIT $1
        OFFSET $2;
    `,
    updateVote: 
     `
        UPDATE t_sentence_vote SET vote = $3 WHERE user_id = $1 AND sentence_id = $2 RETURNING *;
     `
};