const express = require('express');
const router = express.Router();

const restaurantController = require('../controllers/restaurant');

router.post('/', restaurantController.store);

router.get('/:id', restaurantController.showId);

module.exports = router;

// models
//https://documenter.getpostman.com/view/5748264/S1EWQFdD?version=latest#6e07a2bf-08fd-4729-9471-9ba10c65f5e4