const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: [true, 'o nome é obrigatório']
    },
    created: {
      type: Date,
      required: [true, 'A data de cadastro é obrigatório']
    }
  })
  

 
  module.exports = userSchema