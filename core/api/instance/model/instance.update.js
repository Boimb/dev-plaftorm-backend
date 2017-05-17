module.exports = update;

const schema = require('../const/instance.schema.js');
const Joi = require('joi');
const Promise = require('bluebird');
const validate = Promise.promisify(Joi.validate);
const db = require(__base + 'core/service/db.js');
const config = require(__base + 'config.js');
const geoip = require('geoip-lite');

function update(id, ip, params) {

    return validate(params, schema, {stripUnknown: true})
        .then((instance) => {
            
            // getting infos base on user IP
            // this method is not precise, it's only for statistics
            var geo = geoip.lookup(ip);

            if(geo) {
                if(geo.ll && geo.ll instanceof Array) {
                    if(geo.ll[0]) instance.latitude = geo.ll[0];
                    if(geo.ll[1]) instance.longitude = geo.ll[1];
                }
                if(geo.country) instance.country = geo.country;
                if(geo.city) instance.city = geo.city
                if(geo.zip) instance.zipcode = geo.zip;
            }
            
            return db.updateOne('t_instance', ['id = ?', id], instance);
        });
}