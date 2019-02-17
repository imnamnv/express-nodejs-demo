const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js');

router.get('/create',controller.create);
router.post('/create',controller.createUser);
router.get('/',controller.listUser);

module.exports = router;