const Router = require('koa-router');
const multer = require('koa-multer');
const Product = require('../models/product.model');
const upload = require('../middlewares/upload');
const resize = require('../middlewares/Resize');
const path = require('path');
const router = new Router(
    {
        prefix: '/product'
    }
);


router.post('/', upload, async (ctx, next) => { 
    const imagePath = path.join(__dirname, '../uploads/');
    const fileUpdload = new resize(imagePath);
    const file = await fileUpdload.save(ctx.request.buffer);

    const product = new Product({
        name: ctx.request.body.name,
        price: ctx.request.body.price,
        quantity: ctx.request.body.quantity,
        category: ctx.request.body.category,
        color: ctx.request.body.color,
        image: file,
    });
    const savedProduct = await product.save().then(rs => {
        return console.log(rs);
    })
        .catch(err => {
            return console.log(err);
        });
    
    ctx.body = {
        message: 'Product created successfully',
        data: savedProduct
    };
    await next();
});

module.exports = router;