

const connectionString = "mongodb+srv://masterkey:masterkey@cluster0.b2hxt.mongodb.net/<dbname>?retryWrites=true&w=majority"

const mongoose = require('mongoose')
const userSchema = require('../schemma/index');
const produtoSchemma = require('../schemma/produtoSchemma');

const User = mongoose.model('user', userSchema, 'user');
const produto = mongoose.model('produto', produtoSchemma, 'produto')


async function createUser(username) {
  return new User({
    username,
    created: Date.now()
  }).save()
}

async function createProduto(item1 , item2, item3) {
    return new produto({
        nomeProduto : item1,
        valor: item2,
        quantidade: item3
    }).save()
  }
  //APARENTEMENTE NÃO POSSO CADASTRAR PRODUTOS COM O MESMO

async function findUser(nomeProduto) {
  return await produto.findOne({ nomeProduto })
}

exports.post = ('/', (req, res, next) => {
    let valores = req.body;
    ;(async () => {
        const connector = mongoose.connect(connectionString)
        const username = valores.produtoNome;
        const value = valores.valor;
        const qtd = valores.qtd;
      
        let user = await connector.then(async () => {
          return findUser(username, value, qtd)
        })
      
        if (!user) {
          user = await createProduto(username, value, qtd)
        }
      })()
    res.status(201).send(req.body);
});



exports.delete = ('/:produto', (req, res, next) => {
    const itemDeleletado = req.params.produto
    res.status(200).send({
        deletado: itemDeleletado,
        title: "delet criado manooo"
    });
});



exports.put = ('/:id' , (req, res, next) => {
    const id =  req.params.id;
    res.status(200).send({
        id: id,
        item:req.body
    });
});
