const multer = require('koa-multer');

const fs = require('fs');

exports.upload = async (ctx, next) => {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './uploads/');
        },
        filename: function (req, file, cb) {
            var fileformat = (file.originalname).split('.');
            cb(null, file.fieldname + '-' + Date.now() + '.' + fileformat[fileformat.length - 1]);
        }
    })

    var upload = multer({
        limits: {   
            fileSize: 1024 * 1024 * 5
        },
        storage: storage
    });

    const file = upload.single('file');
    file(ctx, next);
}

exports.uploaded = async (ctx, next) => {
    const file = ctx.request.file;
    if (!file) {
        ctx.status = 400;
        return;
    }

    ctx.status = 200;
    ctx.body = {
        message: 'File uploaded successfully',
        data: file
    };
    await next();
}

exports.delete = async (ctx, next) => {
    const file = ctx.request.body.file;
    if (!file) {
        ctx.status = 400;
        return;
    }

    fs.unlink(file, (err) => {
        if (err) throw err;
        console.log('File deleted!');
    });

    ctx.status = 200;
    ctx.body = {
        message: 'File deleted successfully',
        data: file
    };
    await next();
}