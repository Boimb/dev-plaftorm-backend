module.exports = {
    getUserByEmail: `SELECT * FROM t_user WHERE lower(email) = lower($1) AND active = true;`
};