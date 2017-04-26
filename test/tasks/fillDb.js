const Promise = require('bluebird');

module.exports = function fillDb(){
    const db = require(__base + 'core/service/db.js');

    var toFillInOrder = [
        't_user',
        't_sentence',
        't_sentence_vote',
        't_instance',
        't_gladys_version',
        't_module',
        't_module_version',
        't_module_download',
        't_module_review'
    ];

    return Promise.each(toFillInOrder, function(table){
        return db.insert(table, require(`./fixtures/${table}`));
    });
};