const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js');
const validate =require('../validate/user.validate');
var multer = require('multer');
var upload = multer({dest:'./public/uploads/'});

router.get('/create',controller.create);
router.post('/create',upload.single('avatar'),validate.validateUser,controller.createUser);
router.get('/',controller.listUser);
router.get('/:id',controller.getUser);

module.exports = router;