const mongoose = require('mongoose');

module.exports = function(){
    const productSchema = mongoose.Schema({

        name:{
            type: String,
            required: true
        },

        description:{
            type: String,
            required: true
        },

        price:{
            type: Number,
            required: true
        },

        image_url:{
            type: String,
            required: true
        },


    });

    return mongoose.model('Product', productSchema, 'products')
};
