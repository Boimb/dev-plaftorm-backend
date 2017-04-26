module.exports.createSignedUrl = createSignedUrl;

const AWS = require('aws-sdk');
const Promise = require('bluebird');
const s3 = new AWS.S3();
const config = require(__base + 'config.js');

function createSignedUrl(folder, fileName){
    
    var params = {
        Bucket: config.aws.bucket, 
        Key: `${folder}/${fileName}`
    };

    return new Promise(function(resolve, reject){
        s3.getSignedUrl('putObject', params, function(err, url) {
            if(err) return reject(err);
            resolve(url);
        });
    });
}