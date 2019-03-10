const express = require('express');
const router = express.Router();
const controller = require('../controller/product.controller');
const middleware = require('../middleware/cart.middleware');

router.get('/',controller.product);
router.get('/:id',middleware.addToCart,controller.product);

module.exports = router;