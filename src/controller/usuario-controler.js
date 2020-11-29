
const connectionString = "mongodb+srv://masterkey:masterkey@cluster0.b2hxt.mongodb.net/<dbname>?retryWrites=true&w=majority"

const mongoose = require('mongoose')
const usuarioSchemma = require('../schemma/usuarioSchemma');

const Usuario = mongoose.model('usuario', usuarioSchemma, 'usuario');

async function createUsuario(nome , email, senha) {
    return new Usuario({
        nome : nome,
        email: email,
        senha: senha
    }).save()
  }
  async function findUser(nome) {
    return await Usuario.findOne({ nome })
  }
exports.post = ('/', (req, res, next) => {
    const UsuarioGet = req.body;
    const nomeU = UsuarioGet.nomeU;
    const emailU = UsuarioGet.emailU;
    const senhaU = UsuarioGet.senhaU;
    ;(async () => {
        const connector = mongoose.connect(connectionString)

        let user = await connector.then(async () => {
          return findUser(nomeU, emailU, senhaU)
        })
      
        if (!user) {
         await createUsuario(nomeU, emailU, senhaU).then(x=>{
            res.status(201).send({
              message: "usuario cadastrado com sucesso!"
            })
          }).catch(e=>{
            res.status(400).send({
              message: "Erro ao cadastrar",
              data: e
            })
          })
        }
      })()
});

exports.delete = ('/', (req, res, next) => {
    res.status(201).send({
        title: "tudo ok com seu delete"
    })
})

exports.get = ('/:senha', (req, res, next) => {
  let senha = req.params.senha
    const connector = mongoose.connect(connectionString);
    connector.then(async () => {
      Usuario
        .find({senha:senha})
        .then(data =>{
            res.status(200).send({login: true});
        }).catch(e=>{
          res.status(400).send(e);
        });
    })
});

exports.put = ('/:id', (req, res, next) => {
    let idUser = req.params.id
    res.status(200).send({
        id:idUser,
        message:"tudo certo com seu put"
    })
})

//developed by diego