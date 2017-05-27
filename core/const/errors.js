module.exports = {
    model: {
        'USER_EMAIL_ALREADY_EXIST': {
            code: 409,
            message: 'USER_EMAIL_ALREADY_EXIST'
        },
        'LOGIN_EMAIL_PASSWORD_REQUIRED': {
            code: 422,
            message: 'LOGIN_EMAIL_PASSWORD_REQUIRED'
        },
        'LOGIN_USER_NOT_FOUND': {
            code: 404,
            message: 'LOGIN_USER_NOT_FOUND'
        },
        'LOGIN_INVALID_PASSWORD': {
            code: 403,
            message: 'LOGIN_INVALID_PASSWORD'
        },
        'NOT_FOUND': {
            code: 404,
            message: 'NOT_FOUND'
        },
        'UNAUTHORIZED': {
            code: 401,
            message: 'UNAUTHORIZED'
        },
        'DEFAULT': {
            code: 500,
            message: 'SERVER_ERROR'
        }
    },
    db: {
        default: {
            code: 500,
            message: 'SERVER_ERROR'
        }
    }
};