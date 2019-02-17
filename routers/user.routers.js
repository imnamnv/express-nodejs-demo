const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js');
const validate =require('../validate/user.validate');

router.get('/create',controller.create);
router.post('/create',validate.validateUser,controller.createUser);
router.get('/',controller.listUser);
router.get('/:id',controller.getUser);

module.exports = router;