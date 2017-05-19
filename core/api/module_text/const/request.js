module.exports = {
    getByModule: 
    `
        SELECT *
        FROM t_module_text
        WHERE module_id = $1
        ORDER BY created_at DESC
        LIMIT $2
        OFFSET $3;
    `
}