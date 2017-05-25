const Promise = require('bluebird');

module.exports = function cleanDb(){
    const db = require(__base + 'core/service/db.js');

    var toCleanInOrder = [
        't_notification',
        't_module_download',
        't_module_review',
        't_module_text',
        't_module_version',
        't_instance',
        't_gladys_version',
        't_sentence_vote',
        't_sentence',
        't_module',
        't_script',
        't_user'
    ];

    return Promise.each(toCleanInOrder, function(table){
        return db.query(`DELETE FROM ${table}`, []);
    });
};