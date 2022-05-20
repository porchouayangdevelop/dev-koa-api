const Product = require('../models/product.model');

exports.getProducts = async (ctx, next) => {
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
}