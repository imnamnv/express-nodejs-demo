const express = require('express');
const router = express.Router();
const controller = require('../controller/product.controller');

router.get('/',controller.product);

module.exports = router;