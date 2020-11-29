
// USE FIND PARA BRINCAR COM OS FILTROS


const connectionString = "mongodb+srv://masterkey:masterkey@cluster0.b2hxt.mongodb.net/<dbname>?retryWrites=true&w=majority"

const mongoose = require('mongoose')

const produtoSchemma = require('../schemma/produtoSchemma');

const produto = mongoose.model('produto', produtoSchemma, 'produto')


async function createProduto(nomeProduto, valor, quantidade, codigoInterno, estoque, custo, grupoProduto, obs, active) {
  return new produto({
    nomeProduto: nomeProduto,
    valor: valor,
    quantidade: quantidade,
    codigoInterno: codigoInterno,
    estoque: estoque,
    custo: custo,
    grupoProduto: grupoProduto,
    obs: obs,
    active: active
  }).save()
}


async function findUser(nomeProduto) {
  return await produto.findOne({ nomeProduto });

}

exports.post = ('/', (req, res, next) => {
  let valores = req.body;
  ; (async () => {
    const connector = mongoose.connect(connectionString)
    const username = valores.produtoNome;
    const value = valores.valor;
    const qtd = valores.qtd;
    const codigoI = valores.codigoI;
    const estq = valores.estq;
    const cust = valores.cust;
    const grupo = valores.grupo;
    const obs = valores.obs;
    const ativo = valores.ativo
    let user = await connector.then(async () => {
      return findUser(username, value, qtd, codigoI, estq, cust, grupo, obs, ativo)
    })

    if (!user) {
      await createProduto(username, value, qtd, codigoI, estq, cust, grupo, obs, ativo).then(x => {
        res.status(201).send({
          message: "produto cadastrado com sucesso!"
        })
      }).catch(e => {
        res.status(400).send({
          message: "Erro ao cadastrar",
          data: e
        })
      })
    }
  })()

});



exports.delete = ('/:id', (req, res, next) => {
  const itemDeleletado = req.params.id
  const connector = mongoose.connect(connectionString);
  connector.then(async () => {
    return produto.findOneAndRemove(itemDeleletado).then(x => {
      res.status(200).send({
        message: "produto Deletado com sucesso"
      });
    }).catch(e => {
      res.status(400).send({
        message: "erro ao Deletar produto",
        data: e
      })
    })
  })
});




exports.put = ('/:id', (req, res, next) => {
  let parametro = req.params.id
  let body = req.body;
  const nomeProduto = body.nomeProduto;
  console.log(nomeProduto);
  const connector = mongoose.connect(connectionString);
  connector.then(async () => {
    return produto.findByIdAndUpdate(parametro, {
      $set: {
        nomeProduto: nomeProduto
      }
    }).then(x => {
      res.status(200).send({
        message: "produto alterado com sucesso"
      });
    }).catch(e => {
      res.status(400).send({
        message: "erro ao alterar produto",
        data: e
      })
    })
  })

})

exports.get = ('/', (req, res, next) => {
 
  const connector = mongoose.connect(connectionString);
  connector.then(async () => {
    produto
      .find({})
      .then(data =>{
          res.status(200).send(data);
      }).catch(e=>{
        res.status(400).send(e);
      });
  })
})




//developed by diego