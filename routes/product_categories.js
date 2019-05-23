const express = require('express');
const router = express.Router();

const product_categoriesController = require('../controllers/product_categories');

router.post('/', product_categoriesController.store);

router.get('/', product_categoriesController.show);

// router.get('/:id', restaurantController.showId);

// router.patch('/', restaurantController.update);

// router.delete('/:id', restaurantController.destroy);


module.exports = router;