const mongoose = require('mongoose'); // require mongoose

const {
    Schema
} = mongoose;
const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        text: 'name is required',
        validate: {
            validator: function (v) {
                return /^[A-zA-Z0-9]/.test(v);
            }
        }

    },

    price: {
        type: Number,
        required: true,
        validate: {
            validator: function (v) {
                return /^[0-9]/.test(v);
            }
        },
        text: 'price must be number only and not empty',
    },
    quantity: {
        type: Number,
        required: true,
        validate: {
            validator: function (v) {
                return /^[0-9]/.test(v);
            }
        },
        text: 'quantity must be number only and not empty',
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
        validate: {
            validator: function (v) {
                return mongoose.Types.ObjectId.isValid(v);
            }
        },
        text: 'category is required'
    },
    color: {
        type: String,
        required: true,
    },
    image: [{
            type: String,
            required: true,
        }]

        ,
    status: {
        type: String,
        required: true,
        enum: ['active', 'inactive'],
        default: 'active',
        validate: {
            validator: function (v) {
                return /^(active|inactive)/.test(v);
            }
        },
        text: 'status is required',

    },
    description: {
        type: String,
        required: true,
    },
}, {
    timestamps: true // add createdAt and updatedAt field to the schema 
});

module.exports = mongoose.model('Product', productSchema); // Product is the name of collection