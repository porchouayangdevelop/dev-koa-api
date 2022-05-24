
const multer = require('multer');
const util = require('util');
const fs = require('fs');
const {GridFsStorage} = require('multer-gridfs-storage');
const config = require('../config/db');

var storage = new GridFsStorage({
    url: config.url + config.db,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        const match = ["image/png", "image/jpeg"];
        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${file.originalname} - ${Date.now()}`;
            return filename;
        }
        return {
            bucketName: config.imgBucket,
            filename: `${file.originalname} - ${Date.now()}`
        };
    }
});


var upload = multer({ storage: storage });
var uploadFile = util.promisify(upload.single('image'));


module.exports = {
    uploadFile
}