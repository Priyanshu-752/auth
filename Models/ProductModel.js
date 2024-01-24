const mongoose = require('mongoose');
const availableCategory = ['Samsung','Apple','Poco'];
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
     description:{
        type: String,
        required: true
     },
     price:{
        type: String,
        required: true
     },
     category:{
        type: String,
        enum:{values:availableCategory}
     },

});

const Product = mongoose.model('Product',productSchema);
module.exports = Product;