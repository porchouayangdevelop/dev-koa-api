const Router = require('koa-router');
const multer = require('koa-multer');
const Product = require('../models/product.model');
const router = new Router(
    {
        prefix: '/product'
    }
);

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
    storage: storage
});

router.get('/', async (ctx, next) => {
    const products = await Product.find()
        .sort({
            createdAt: -1
        }).
        select('-__v')
        .exec();
    if (!products) {
            
            ctx.body = {
                message: 'Products not found',
                data: products
            };
            return;
    }
    ctx.status = 200;
    ctx.body = {
        message: 'Products retrieved successfully',
        data: products
    };
    await next();
});

router.post('/', upload.single('file'), async (ctx, next) => { // upload.single('image')
    const product = new Product({
        name: ctx.request.body.name,
        price: ctx.request.body.price,
        quantity: ctx.request.body.quantity,
        category: ctx.request.body.category,
        color: ctx.request.body.color,
        image: ctx.request.body.image
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