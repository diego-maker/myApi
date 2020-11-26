const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

//ROTAS DA MINHA API IMPORTANDO

const indexRota = require('./routes/index');
const rotaProduto = require('./routes/produtos');
const rotaUsuario = require('./routes/usuario');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));



app.use('/produto', rotaProduto);
app.use('/',indexRota);
app.use('/usuario', rotaUsuario);

module.exports = app
