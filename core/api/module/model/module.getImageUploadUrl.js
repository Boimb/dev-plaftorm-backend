module.exports = getImageUploadUrl;

const s3 = require(__base + 'core/service/s3.js');
const path = require('path');

function getImageUploadUrl(params) {

    var fileInfos = path.parse(params.filename);

    if(['.jpg', '.jpeg'].indexOf(fileInfos.ext) === -1){
        return Promise.reject(new Error('INCORRECT_FILE_FORMAT'));
    }

    var newFileName = `uuid.v4().jpg`;

    return s3.createSignedUrl('modules', newFileName)
        .then((url) => {
            return {url: url};
        });
}