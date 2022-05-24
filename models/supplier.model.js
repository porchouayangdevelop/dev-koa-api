const mongoose = require('mongoose');

const { Schema } = mongoose;

const supplierSchema = new Schema({
    name: {
        type: String,
        required: true,
        text: 'name is required',
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9]*$/.test(v);
            }
        },

    },
    phone: {
        type: Number,
        required: true,
        text: 'phone is required',
        validate: {
            validator: function (v) {
                return /^[0-9]*$/.test(v);
            }
        },
        default: 2099999999,
    },
    address: {
        type: String,
        required: true,
        text: 'address is required',
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9]/.test(v);
            }
        },
    },
    description: {
        type: String,
        required: true,
        text: 'description is required',
        validate: {
            validator: function (v) {
            }
        },
    }

}, { timestamps: true });

module.exports = mongoose.model('Supplier', supplierSchema); // Supplier is the name of collection