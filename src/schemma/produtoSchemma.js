const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nomeProduto:{
        type: String,
        required: [true, 'o nome do produto é Obrigatório']
    },
    valor : {
        type: String,
        required: [false, 'é necessário informar o valor']
    },
    quantidade:{
      type: String,
      required: [false]
    }
});

module.exports = productSchema