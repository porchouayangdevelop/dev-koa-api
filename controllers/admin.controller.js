const User = require('../models/admin.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {
    validate,
    Joi
} = require('koa-context-validator');

exports.signUp = async (ctx, next) => {
    const {
        firstname,
        lastname,
        username,
        password,
        email,
        phone,
        role
    } = ctx.request.body;

    if(!firstname || !lastname || !username || !password || !email || !phone || !role) {
        ctx.status = 400;
        ctx.body = {
            message: 'Please fill all fields'
        }
        return;
    }
    const olduser = await User.findOne({ username });
    if (olduser) {
        ctx.status = 400;
        ctx.body = {
            message: 'Username already exists'
        };
        return;
    }
    const user = new User({
        firstname: firstname,
        lastname: lastname,
        username: username,
        password: bcrypt.hashSync(password, 10),
        email: email,
        phone: phone,
        role: role
    });
    await user.save()
        .then(result => {
            ctx.status = 201;
            ctx.body = {
                message: 'User created successfully',
                data: result
            };
            const token = jwt.sign({
                _id: result._id,
                username: result.username,
                role: result.role
            }, process.env.JWT_SECRET, { expiresIn: '1h' });
            user.token = token;
            ctx.cookies.set('access_token', token, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60
            });

        })
        .catch(err => {
            ctx.status = 400;
            ctx.body = {
                message: 'User not created',
                data: err
            };
        });
    await next;
}

exports.signIn = async (ctx, next) => {

    const {
        username,
        password
    } = ctx.request.body;
    const user = await User.findOne({
        username: username
    });
    if (!user) {
        ctx.status = 400;
        ctx.body = {
            message: 'Username or password is incorrect',
        };
        return;
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        ctx.status = 400;
        ctx.body = {
            message: 'password wrong',
        };
        return;
    }
    const token = jwt.sign({
        id: user._id,
        username: user.username,
        role: user.role
    }, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });
    ctx.cookies.set('access_token', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60
    });
    user.token = token;
    ctx.status = 200;
    ctx.body = {
        message: 'User logged in successfully',
        data: user
    };
    await next;
}

exports.getUsers = async (ctx, next) => {
    const users = await User.find()
        .sort({ createdAt: -1 })
        .select('-__v')
        .exec();
    if (!users) {
        ctx.status = 400;
        ctx.body = {
            message: 'No users found'
        };
        return;
    }
    ctx.status = 200;
    ctx.body = {
        message: 'Users fetched successfully',
        data: users
    };
    await next;
    return users;
}

exports.getUser = async (ctx, next) => {
    const user = await User.findById(ctx.params._id).select('-__v').exec();
    if (!user) {
        ctx.status = 400;
        ctx.body = {
            message: 'User not found'
        };
        return;
    }
    ctx.status = 200;
    ctx.body = {
        message: 'User fetched successfully',
        data: user
    };
    await next;
}

exports.putUser = async (ctx, next) => {
    const {
        firstname,
        lastname,
        email,
        phone,
        role
    } = ctx.request.body;
    const user = await User.findById(ctx.request.params._id);
    if (!user) {
        ctx.status = 400;
        ctx.body = {
            message: 'User not found'
        };
        return;
    }
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.phone = phone;
    user.role = role;
    await user.save()
        .then(result => {
            ctx.status = 200;
            ctx.body = {
                message: 'User updated successfully',
                data: result
            };
        })
        .catch(err => {
            ctx.status = 400;
            ctx.body = {
                message: 'User not updated',
                data: err
            };
        });
    await next;
}

exports.deleteUser = async (ctx, next) => {
    const user = await User.findById(ctx.request.params._id);
    if (!user) {
        ctx.status = 400;
        ctx.body = {
            message: 'User not found'
        };
        return;
    }
    await user.remove()
        .then(result => {
            ctx.status = 200;
            ctx.body = {
                message: 'User deleted successfully',
                data: result
            };
        })
        .catch(err => {
            ctx.status = 400;
            ctx.body = {
                message: 'User not deleted',
                data: err
            };
        });
    await next;
}
