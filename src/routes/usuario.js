
const express = require('express');
const router = express.Router();

const controller = require('../controller/usuario-controler');

router.post('/', controller.post);
router.delete('/', controller.delete);
router.get('/', controller.get);
router.put('/:id', controller.put);

module.exports = router;