const mongoose = require('mongoose');

const {
    Schema
} = mongoose;

const orderDetailSchema = new Schema({
    order: {
        type: Schema.Types.ObjectId,
        ref: 'Order',
        required: true,
        validate: {
            validator: function (v) {
                return mongoose.Types.ObjectId.isValid(v);
            }
        },
        text: 'order is required'
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
        validate: {
            validator: function (v) {
                return mongoose.Types.ObjectId.isValid(v);
            }
        },
        text: 'product is required'
    },
    quantity: {
        type: Number,
        required: true,
        validate: {
            validator: function (v) {
                return /^[0-9]*$/.test(v);
            }
        },
        text: 'quantity must be number only and not empty',
    },
    price: {
        type: Number,
        required: true,
        validate: {
            validator: function (v) {
                return /^[0-9]*$/.test(v);
            }
        },
        text: 'price must be number only and not empty',
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
    desciption: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9]*$/.test(v);
            }
        },
        text: 'desciption is required',
        default: 'order detail description',
    },
}, {
    timestamps: true
}); // timestamps: true will add createdAt and updatedAt fields to the schema

module.exports = mongoose.model('OrderDetail', orderDetailSchema); // OrderDetail is the name of collection