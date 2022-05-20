const Supplier = require('../models/supplier.model');

exports.getAllSuppliers = async (ctx, next) => {
    const suppliers = await Supplier.find();
    ctx.status = 200;
    ctx.body = {
        message: 'Suppliers fetched successfully',
        data: suppliers
    };
    await next;
};

exports.getSupplier = async (ctx, next) => {
    const supplier = await Supplier.findById(ctx.request.params._id);
    if (!supplier) {
        ctx.status = 400;
        ctx.body = {
            message: 'Supplier not found'
        };
        return;
    }
    ctx.status = 200;
    ctx.body = {
        message: 'Supplier fetched successfully',
        data: supplier
    };
    await next;
};

exports.createSupplier = async (ctx, next) => {
    const { name, phone, address, description } = ctx.request.body;

    if (!name || !phone || !address || !description) {
        ctx.status = 400;
        ctx.body = {
            message: 'Please provide all required fields'
        };
        return;
    }

    const supplier = new Supplier({
        name: name,
        phone: phone,
        address: address,
        description: description       
    });
    await supplier.save();
    ctx.status = 201;
    ctx.body = {
        message: 'Supplier created successfully',
        data: supplier
    };
    await next;
}

exports.updateSupplier = async (ctx, next) => {
    const { name, phone, address, description } = ctx.request.body;

    if (!name || !phone || !address || !description) {
        ctx.status = 400;
        ctx.body = {
            message: 'Please provide all required fields'
        };
        return;
    }

    const supplier = await Supplier.findByIdAndUpdate(ctx.request.params._id, {
        name: name,
        phone: phone,
        address: address,
        description: description
    });
    if (!supplier) {
        ctx.status = 400;
        ctx.body = {
            message: 'Supplier not found'
        };
        return;
    }
    ctx.status = 200;
    ctx.body = {
        message: 'Supplier updated successfully',
        data: supplier
    };
    await next;
}

exports.deleteSupplier = async (ctx, next) => {
    const supplier = await Supplier.findByIdAndRemove(ctx.request.params._id);
    if (!supplier) {
        ctx.status = 400;
        ctx.body = {
            message: 'Supplier not found'
        };
        return;
    }
    ctx.status = 200;
    ctx.body = {
        message: 'Supplier deleted successfully',
        data: supplier
    };
    await next;
}
