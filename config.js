module.exports = {
    db: {
        user: process.env.DB_USER,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        max: parseInt(process.env.DB_MAX_CLIENT), // max number of clients in the pool
        idleTimeoutMillis: parseInt(process.env.DB_IDLE_TIMEOUT), // how long a client is allowed to remain idle before being closed
    },
    redis: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT),
        passord: process.env.REDIS_PASSWORD
    },
    server: {
        port: parseInt(process.env.SERVER_PORT)
    },
    accessTokenJwt: {
        secret: process.env.ACCESS_TOKEN_JWT_SECRET,
        options: {
            expiresIn: process.env.ACCESS_TOKEN_JWT_EXPIRATION   
        }
    },
    aws: {
        bucket: process.env.AWS_BUCKET
    }
};