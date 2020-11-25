
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

;(async () => {
    const connector = mongoose.connect(connectionString)
    const username = "feijão";
    const value = "40 milhoes de reaissss";
    const qtd = "meia duzia "
  
    let user = await connector.then(async () => {
      return findUser(username, value, qtd)
    })
  
    if (!user) {
      user = await createProduto(username, value, qtd)
    }
  
    
  })()
// ;(async () => {
//   const connector = mongoose.connect(connectionString)
//   const username = process.argv[2].split('=')[1]

//   let user = await connector.then(async () => {
//     return findUser(username)
//   })

//   if (!user) {
//     user = await createUser(username)
//   }

//   console.log(user)
//   process.exit(0)
// })()