const errors = require(__base + 'core/const/errors.js');

module.exports = function formatError(err) {
    
    // error from joi
    if(err && err.isJoi) {
        err = {
            code: 422,
            validations: err.details
        };
    } 
    
    // if error is a PostgreSQL error
    else if(err && err.sqlState) {

        // if we find the right error to return 
        if(errors.db[err.sqlState]) err = errors.db[err.sqlState];

        // else return the default one
        else err = errors.db.default;
    } else if(err instanceof Error) {
        if(errors.model[err.message]) err = errors.model[err.message];
        else err = errors.model.DEFAULT;
    }
    else {
        err = {
            code: 500,
            message: 'SERVER_ERROR'
        };
    }

    return err;
};