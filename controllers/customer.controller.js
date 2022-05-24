const Customer = require('../models/customer.model');
const bcrypt = require('bcrypt');
// create customer controller
exports.createCustomer = async (ctx, next) => {
    const {
        name,
        email,
        password,
        phone,
        address,
        status
    } = ctx.request.body;
    if (!name || !email || !password || !phone || !address || !status) {
        ctx.status = 400;
        ctx.body = {
            message: 'Missing required fields'
        };
        return;
    }
    encryptPass = await bcrypt.hash(password, 10);
    const customer = new Customer({
        name: name,
        email: email,
        password: encryptPass,
        phone: phone,
        address: address,
        status: status,
    });
    await customer.save();
    if (customer) {
        ctx.body = {
            status: 200,
            message: 'Customer created successfully',
            data: customer
        }
    } else {
        ctx.body = {
            status: 500,
            message: 'Customer not created',
            data: customer
        }
    }
    await next();
}

// get all customers controller
exports.getAllCustomers = async (ctx, next) => {
    const customers = await Customer.find().sort({
        createdAt: -1
    }).select('-__v').exec();
    if (!customers) {
        ctx.status = 404;
        ctx.body = {
            message: 'No customers found'
        };
        return;
    }
    ctx.body = {
        status: 200,
        message: 'Customers fetched successfully',
        data: customers
    }
    await next();
}

// get customer by id controller
exports.getCustomer = async (ctx, next) => {
    const customer = await Customer.findById(ctx.request.params._id).select('-__v').exec();
    if (!customer) {
        ctx.status = 404;
        ctx.body = {
            message: 'No customer found'
        };
        return;
    }
    ctx.body = {
        status: 200,
        message: 'Customer fetched successfully',
        data: customer
    }
    await next();
}

// update customer by id controller
exports.updateCustomer = async (ctx, next) => {
    const {
        name,
        email,
        phone,
        address,
        status
    } = ctx.request.body;
    const customer = await Customer.findByIdAndUpdate(ctx.request.params._id, {
        name: name,
        email: email,
        phone: phone,
        address: address,
        status: status,
    }, {
        new: true
    }).select('-__v').exec();
    if (!customer) {
        ctx.status = 404;
        ctx.body = {
            message: 'No customer found'
        };
        return;
    }
    ctx.body = {
        status: 200,
        message: 'Customer updated successfully',
        data: customer
    }
    await next();
}

// delete customer by id controller
exports.deleteCustomer = async (ctx, next) => {
    const customer = await Customer.findByIdAndDelete(ctx.request.params._id).select('-__v').exec();
    if (!customer) {
        ctx.status = 404;
        ctx.body = {
            message: 'No customer found'
        };
        return;
    }
    ctx.body = {
        status: 200,
        message: 'Customer deleted successfully',
        data: customer
    }
    await next();
}