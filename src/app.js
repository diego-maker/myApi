const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
const indexRota = require('./routes/index');
const rotaProduto = require('./routes/produtos');
const rotaUsuario = require('./routes/usuario');
//teste
// my header    
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');


    app.use('/produto', rotaProduto);
    app.use('/', indexRota);
    app.use('/usuario', rotaUsuario);
    next();
}

app.use(allowCrossDomain);

//ROTAS DA MINHA API IMPORTANDO


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




module.exports = app
