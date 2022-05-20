const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        text: 'name is required',
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9]/.test(v);
            }
        }

    },
    description: {
        type: String,
        required: true,
        text: 'description is required',
        validate: {
            validator: function (v) {
                return /^[A-zA]/.test(v);
            }
        },
        
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Category', categorySchema);