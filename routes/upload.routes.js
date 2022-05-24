const Router = require('koa-router');
// const {uploadFile} = require('../controllers/upload');
const upload = require('../middlewares/upload');
const Image = require('../models/uploadImage.model');
const router = new Router({
    prefix: '/image'
});


router.post('/', upload.single('image'), async (ctx, next) => { 
    const file = ctx.request.files.filename;
    const { name, desrciption } = ctx.request.body;
    const image = new Image({
        name:name,
        desrciption:desrciption,
        images: {
            data: fs.readFileSync(path.join(__dirname, '../uploads/' + file)),
            contentType: 'image/jpeg'
        }
    });
    await image.save();
    ctx.body = {
        message: 'success'
    };
    

});
        

module.exports = router;