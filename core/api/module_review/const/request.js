module.exports = {
    getByModule: 
    `
        SELECT note, text, t_user.name as author
        FROM t_module_review
        JOIN t_user ON t_user.id = t_module_review.user_id
        JOIN t_module ON t_module.id = t_module_review.module_id
        WHERE module_id = $1
        AND t_module.online = true
        ORDER BY t_module_review.created_at DESC
        LIMIT $2
        OFFSET $3;
    `
};