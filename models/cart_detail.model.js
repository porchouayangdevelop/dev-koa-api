const mongoose = require('mongoose');

const { Schema } = mongoose;

const cartDetailSchema = new Schema({
    cart: {
        type: Schema.Types.ObjectId,
        ref: 'Cart',
        required: true,
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending',
    },
    desciption: {
        type: String,
        required: true,
    },
    
}, { timestamps: true }); // timestamps: true will add createdAt and updatedAt fields to the schema

module.exports = mongoose.model('CartDetail', cartDetailSchema); // CartDetail is the name of collection