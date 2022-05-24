const mongoose = require('mongoose');

const { Schema } = mongoose;

const customerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
        validate: {
            validator: function (value) {
                return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value);
            }
        },
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
        
        text: 'Phone number must be 10 digits'
    },
    address: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    image: {
        type: String,
    },
}, { timestamps: true });

module.exports = mongoose.model('Customer', customerSchema); // Customer is the name of collection