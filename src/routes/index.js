const express = require('express');
const router = express.Router();

const connectionString = "mongodb+srv://masterkey:masterkey@cluster0.b2hxt.mongodb.net/<dbname>?retryWrites=true&w=majority"

const mongoose = require('mongoose')

const produtoSchemma = require('../schemma/produtoSchemma');

const produto = mongoose.model('produto', produtoSchemma, 'produto')



router.get('/:nomeProduto', (req, res, next) => {
    res.status(200).send({
      message: "oi"
    })
});

module.exports = router;

//developed by diego