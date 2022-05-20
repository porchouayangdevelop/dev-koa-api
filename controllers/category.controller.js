const Category = require('../models/category.model');

exports.getCategories = async (ctx, next) => {
    const categories = await Category.find()
        .sort({
            createdAt: -1
        }).
    select('-__v')
        .exec();
    if (!categories) {

        ctx.body = {
            message: 'Categories not found',
            data: categories
        };
        return;
    }

    ctx.status = 200;
    ctx.body = {
        message: 'Categories retrieved successfully',
        data: categories
    };
    await next();
}

exports.getCategory = async (ctx, next) => {
    const category = await Category.findById(ctx.request.params.id)
        .select('-__v')
        .exec();
    if (!category) {
        ctx.status = 404;
        ctx.body = {
            message: 'Category not found',
            data: category
        };
        return;
    }

    ctx.status = 200;
    ctx.body = {
        message: 'Category retrieved successfully',
        data: category
    };
    await next();

}

exports.createCategory = async (ctx, next) => {
    const {
        name,
        description
    } = ctx.request.body;
    const newCategory = new Category({
        name: name,
        description: description
    });
    await newCategory.save()
        .then(category => {
            ctx.status = 201;
            ctx.body = {
                message: 'Category created successfully',
                data: category
            };
        }).catch(err => {
            ctx.status = 400;
            ctx.body = {
                message: 'Category creation failed',
                data: err
            };
        });


    await next();
}

exports.updateCategory = async (ctx, next) => {
    const {
        name,
        description
    } = ctx.request.body;
    const category = await Category.findByIdAndUpdate(ctx.request.params.id, {
        name: name,
        description: description
    }, {
        new: true
    }).select('-__v')
        .exec();
    if (!category) {
        ctx.status = 404;
        ctx.body = {
            message: 'Category not found',
            data: category
        };
        return;
    }
    await category.save()
        .then(category => {
            ctx.status = 200;
            ctx.body = {
                message: 'Category updated successfully',
                data: category
            };
        }
    ).catch(err => {
        ctx.status = 400;
        ctx.body = {
            message: 'Category update failed',
            data: err
        };
    });
   await next();
}


exports.deleteCategory = async (ctx, next) => {
    const category = await Category.findByIdAndRemove(ctx.request.params._id)
        .select('-__v')
        .exec();
    if (!category) {
        ctx.status = 404;
        ctx.body = {
            message: 'Category not found',
            data: category
        };
        return;
    }

    ctx.status = 200;
    ctx.body = {
        message: 'Category deleted successfully',
        data: category
    };
    await next();
}