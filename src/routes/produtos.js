const express = require('express');
const router = express.Router();
const controller = require('../controller/product-controler');

router.delete('/DELETE/:id', controller.delete); 
router.post('/', controller.post);
router.put('/PUT/:id', controller.put);
router.get('/' , controller.get);
router.get('/:nomeProduto', controller.get);
module.exports = router