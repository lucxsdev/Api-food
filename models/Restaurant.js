const mongoose = require('mongoose');

module.exports = function(){
    const restaurantSchema = mongoose.Schema({


        name:{
            type: String,
            required: true
        },

        description:{
            type: String,
            required: true
        },

        review:{
            type: String,
            required: true
        },

        status:{
            type: String,
            required: true
        },

        delivery_tax:{
            type: Number,
            required: true
        },

        state:{
            type: String,
            required: true
        },

        city:{
            type: String,
            required: true
        },

        street:{
            type: String,
            required: true
        },

        neighborhood:{
            type: String,
            required: true
        },

        number:{
            type: String,
            required: true
        },

        complement:{
            type: String
        },

        reference:{
            type: String
        },

        cep:{
            type: String
        },

        image_url:{
            type: String,
            required: true
        },

        product_categories: 
            {
            type: mongoose.ObjectId,
            ref: 'Product_categories',
         }

    });

    return mongoose.model('Restaurant', restaurantSchema, 'restaurant')
};
