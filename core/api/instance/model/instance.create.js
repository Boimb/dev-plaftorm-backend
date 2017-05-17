module.exports = create;

const schema = require('../const/instance.schema.js');
const Joi = require('joi');
const Promise = require('bluebird');
const validate = Promise.promisify(Joi.validate);
const db = require(__base + 'core/service/db.js');
const config = require(__base + 'config.js');
const geoip = require('geoip-lite');

function create(ip, params) {

    return validate(params, schema, {stripUnknown: true})
        .then((instance) => {
            
            // getting infos base on user IP
            // this method is not precise, it's only for statistics
            var geo = geoip.lookup(ip);

            if(geo) {
                if(geo.ll && geo.ll instanceof Array) {
                    instance.latitude = geo.ll[0] || null;
                    instance.longitude = geo.ll[1] || null;
                }
                instance.country = geo.country || null;
                instance.city = geo.city || null;
                instance.zipcode = geo.zip || null;
            }
            
            return db.insert('t_instance', instance);
        });
}