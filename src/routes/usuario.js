
const express = require('express');
const router = express.Router();

const controller = require('../controller/usuario-controler');

router.post('/', controller.post);
router.delete('/:senha', controller.delete);
router.get('/:senha', controller.get);
router.put('/:id', controller.put);

module.exports = router;

//developed by diego