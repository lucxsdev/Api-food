const express = require('express');
const router = express.Router();

const productController = require('../controllers/product');

router.post('/', productController.store);

router.get('/', productController.show);

// router.get('/:id', restaurantController.showId);

// router.patch('/', restaurantController.update);

// router.delete('/:id', restaurantController.destroy);


module.exports = router;