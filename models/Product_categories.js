const mongoose = require('mongoose');

module.exports = function(){
    const Product_categoriesSchema = mongoose.Schema({

        title:{
            type: String,
            required: true
        },

        products: {
            type: mongoose.ObjectId,
            ref: 'Product',
            required: true
         }
    });

    return mongoose.model('Product_categories', Product_categoriesSchema, 'product_categories')
};
