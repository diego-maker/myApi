const express = require('express');
const router = express.Router();

const connectionString = "mongodb+srv://masterkey:masterkey@cluster0.b2hxt.mongodb.net/<dbname>?retryWrites=true&w=majority"

const mongoose = require('mongoose')

const produtoSchemma = require('../schemma/produtoSchemma');

const produto = mongoose.model('produto', produtoSchemma, 'produto')



router.get('/:nomeProduto', (req, res, next) => {
    let nomeProduto = req.params.nomeProduto
    const connector = mongoose.connect(connectionString);
    connector.then(async () => {
      produto
        .find({nomeProduto:nomeProduto})
        .then(data =>{
            res.status(200).send(data);
        }).catch(e=>{
          res.status(400).send(e);
        });
    })
});

module.exports = router;

//developed by diego