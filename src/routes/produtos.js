const express = require('express');
const router = express.Router();
const controller = require('../controller/product-controler');

router.delete('/:produto', controller.delete);  
router.post('/', controller.post);
router.put('/:id', controller.put);


module.exports = router