module.exports = {
    getByModule:
    `
        SELECT version, created_at
        FROM t_module_version
        WHERE module_id = $1
        ORDER BY created_at DESC
        LIMIT $2
        OFFSET $3
    `
};