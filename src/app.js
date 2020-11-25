const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

//ROTAS DA MINHA API IMPORTANDO

const indexRota = require('./routes/index');
const rotaDelete = require('./routes/produtos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));



app.use('/produto', rotaDelete);
app.use('/',indexRota);

module.exports = app
