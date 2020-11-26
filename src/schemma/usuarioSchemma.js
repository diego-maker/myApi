const mongoose = require('mongoose');

const usuarioSchemma = new mongoose.Schema({
    nome :{
        type: String,
        required: [true, "necessário informar o nome do usuario"]
    },
    email :{
        type: String,
        required: [true, "necessártio informar o email"]
    },
    senha :{
        type: String,
        required: [true, "necessário informar uma senha "]
    }
})

module.exports = usuarioSchemma;