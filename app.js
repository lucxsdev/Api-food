const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const restaurantsRouter = require('./routes/restaurants');
const productsRouter = require('./routes/products');
const product_categoriesRouter = require('./routes/product_categories');


// Conexão com o banco de dados
const db = require('./config/database');

db('mongodb://127.0.0.1:27017/api-food');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Rotas adicionadas 
app.use('/restaurants', restaurantsRouter);
app.use('/products', productsRouter);
app.use('/product_categories', product_categoriesRouter);

module.exports = app;
