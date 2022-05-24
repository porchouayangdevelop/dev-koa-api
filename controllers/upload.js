const Image = require('../models/uploadImage.model');
const fs = require('fs');
const path = require('path');



 
const db       = require('../config/db');
const multer = require('multer');
const client = require('mongodb').MongoClient;
const GridFsStorage = require('multer-gridfs-storage');
const GridFsBucket = require('mongodb').GridFSBucket;

const baseUrl = 'http://localhost:3001/files/';
const upload = require('../middlewares/upload');

exports.uploadFile = async ctx => {
    try {
        await upload(ctx, next => {
            if (ctx.req.file == undefined) {
                ctx.body = {
                    message: 'no file',
                    file: ctx.req.file
                };
            } else {
                ctx.body = {
                    message: 'success',
                };
            }
        });

    } catch (err) {
        console.log(err);
    }
}

exports.getListFile = async ctx => {
    try {
        await client.connect();
        const db = client.db(db.db);
        const image = db.collection(db.imgBucket + 'files');
        const listFile = await image.find({}).toArray();
        if((await listFile).length === 0){
            ctx.body = {
                message: 'no file'
            }
            return;
        }
        let list = [];
        await listFile.forEach(async (file) => {
            list.push({
                _id: file._id,
                name: file.filename,
                url: baseUrl + file.filename
            });
            return ctx.body = {
                message: 'success',
                list: list
            };
        });
    } catch (err) {
        console.log(err);
    }
}

exports.download = async (ctx, next) => {
    try {
        await client.connect();
        const db = client.db(db.db);
        const bucket = new GridFsBucket(db, {
            bucketName: db.imgBucket
        });
    } catch (err) {
        console.log(err);
    }
    await next();
}