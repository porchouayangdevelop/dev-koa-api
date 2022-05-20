const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        text:'firstname is required'
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        text:'lastname is required'
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 6,
        maxlength: 20,
        text:'username must be between 6 and 20 characters'
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function (v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            }
        },
        text: 'Email must be contain character @.com'
    },
    phone: {
        type: Number,
        required: true,
        minlength: 10,
        maxlength: 15,
        text:'phone must be between 10 and 15 characters'
    },
    role: {
        type: String,
        required: true,
        trim: true,
        enum: ['admin', 'mangeer', 'account', 'staff'],
        default: 'staff',
        text: 'role must be admin, mangeer, account, staff',
        validate: {
            validator: function (v) {
                return /^(admin|mangeer|account|staff)$/.test(v);
            }
        }

    },
    token: {
        type: String,
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
    
