module.exports = {
    hasRight: 'SELECT * FROM t_module WHERE user_id = $1 AND id = $2;',
    get: 
    `
        SELECT t_module.id, t_module.name, slug, img, version, t_user.name as author, t_module_text.description, ROUND(AVG(note)) as review
        FROM t_module
        JOIN t_user ON t_module.user_id = t_user.id
        LEFT JOIN t_module_review ON t_module.id = t_module_review.module_id
        JOIN t_module_version ON t_module.id = t_module_version.module_id
        JOIN t_module_text ON t_module.id = t_module_text.module_id
        JOIN (
            SELECT MAX(created_at) as created_at, module_id FROM t_module_version GROUP BY module_id
        ) as max_module_version ON t_module_version.created_at = max_module_version.created_at
        JOIN (
            SELECT MAX(created_at) as created_at, module_id FROM t_module_text WHERE online = true GROUP BY module_id
        ) as max_module_text ON t_module_text.created_at = max_module_text.created_at
        WHERE t_module_text.language = $1
        AND t_module.online = true
        GROUP BY  t_module.id, t_module.name, slug, version, t_user.name, t_module_text.description
        ORDER BY review DESC
        LIMIT $2
        OFFSET $3;
    `
};