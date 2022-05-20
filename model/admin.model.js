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
        trim: true,
        minlength: 6,
        maxlength: 20,
        validate: {
            validator: function (value) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,20}/.test(value);
            }
        },
        text: 'Email must be between 6 and 20 characters, must contain at least one number, one uppercase letter, one lowercase letter, and one special character'

    },
    email: {
        type: String,
        required: true,
        unique: true,
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
        trim: true,
        minlength: 10,
        maxlength: 10,
        validate: {
            validator: function (v) {
                return /^[0-9]{10}$/.test(v);
            }
        },
        text: 'Phone must be 10 digits'
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
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
    
