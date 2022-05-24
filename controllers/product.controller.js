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

exports.getProduct = async (ctx, next) => {
    const product = await Product.findById(ctx.request.params._id)
        .select('-__v')
        .exec();
    if (!product) {

        ctx.body = {
            message: 'Product not found',
            data: product
        };
        return;
    }

    ctx.status = 200;
    ctx.body = {
        message: 'Product retrieved successfully',
        data: product
    };
    await next();
}

exports.updateProduct = async (ctx, next) => {

    const {
        name,
        price,
        quantity,
        category,
        color,
        image
    } = ctx.request.body;
    const product = await Product.findByIdAndUpdate(ctx.request.params._id, {
            name: name,
            price: price,
            quantity: quantity,
            category: category,
            color: color,
            image: image
        }, {
            new: true
        }).select('-__v')
        .exec();
    if (!product) {

        ctx.body = {
            message: 'Product not found',
            data: product
        };
        return;
    }

    ctx.status = 200;
    ctx.body = {
        message: 'Product updated successfully',
        data: product
    };
    await next();
}

exports.deleteProduct = async (ctx, next) => {
    const product = await Product.findByIdAndDelete(ctx.request.params._id)
        .select('-__v')
        .exec();
    if (!product) {

        ctx.body = {
            message: 'Product not found',
            data: product
        };
        return;
    }

    ctx.status = 200;
    ctx.body = {
        message: 'Product deleted successfully',
        data: product
    };
    await next();
}