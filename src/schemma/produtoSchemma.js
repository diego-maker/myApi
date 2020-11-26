const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nomeProduto:{
        type: String,
        required: [true, 'o nome do produto é Obrigatório']
    },
    valor : {
        type: Number,
        required: [true, 'é necessário informar o valor']
    },
    quantidade:{
      type: Number,
      required: [true, 'é necessário informar a quantidade']
    },
    codigoInterno:{
        type: String,
        required:true
    },
    estoque:{
        type: Number,
        required: true
    },
    custo:{
        type: Number,
        required: true
    },
    grupoProduto:{
        type: String,
        required: true
    },
    obs:{
        type:String,
        required: false
    },
    active:{
       type: String,
       required: true
    }
});

module.exports = productSchema