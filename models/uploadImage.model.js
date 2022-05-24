const mongoose = require('mongoose');

const { Schema } = mongoose;

const imageSchema = new Schema({
    name: String,
    desrciption: String,
    images: 
        {
        data: Buffer,
        contentType: String
        }
    
}, {
    timestamps: true,
});

module.exports = mongoose.model('Image', imageSchema);