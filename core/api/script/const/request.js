module.exports = {
    hasRight: `SELECT * FROM t_script WHERE user_id = $1 AND id = $2;`,
    get: `
        SELECT t_script.id, t_script.name as name, t_user.name as author, t_script.updated_at
        FROM t_script
        JOIN t_user ON t_script.user_id = t_user.id
        ORDER BY t_script.updated_at DESC
        LIMIT $1
        OFFSET $2;
    `
};