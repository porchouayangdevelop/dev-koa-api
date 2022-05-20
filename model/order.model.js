const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        validate: {
            validator: function (v) {
                return mongoose.Types.ObjectId.isValid(v);
            }
        },
        text: 'user is required'
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        required: true,
        validate: {
            validator: function (v) {
                return mongoose.Types.ObjectId.isValid(v);
            }
        },
        text: 'customer is required'
    },
    supplier: {
        type: Schema.Types.ObjectId,
        ref: 'Supplier',
        required: true,
        validate: {
            validator: function (v) {
                return mongoose.Types.ObjectId.isValid(v);
            }
        },
        text: 'supplier is required'
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
        validate: {
            validator: function (v) {
                return mongoose.Types.ObjectId.isValid(v);
            }
        },
        text: 'product is required'

    }],
    total: {
        type: Number,
        required: true,
        validate: {
            validator: function (v) {
                return /^[0-9]*$/.test(v);
            }
        },
        text: 'total must be number only and not empty',
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending',
        text: 'status is required',
        validate: {
            validator: function (v) {
                return /^(pending|approved|rejected)/.test(v);
            }
        }
    },
    description: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9]*$/.test(v);
            }
        },
        text: 'description is required',
    },
}, { timestamps: true }); // timestamps: true will add createdAt and updatedAt fields to the schema

module.exports = mongoose.model('Order', orderSchema); // Order is the name of collection