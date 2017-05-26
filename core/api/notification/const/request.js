module.exports = {
    get: `
        SELECT created_at, type, params, read
        FROM t_notification
        WHERE user_id = $1
        ORDER BY created_at DESC
        LIMIT $2
        OFFSET $3;
    `,
    read: `
        UPDATE t_notification SET read = true WHERE user_id = $1
    `
};