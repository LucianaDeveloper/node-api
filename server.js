const express = require("express");/* Importando o express através do require */
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
/* Definindo variável e executando a função express: */
// Iniciando o App
const app = express(); 
app.use(express.json()); // Permitir que eu envie dados em formato de json que é o mais apropriado para api rest
app.use(cors());/* Após importar ele acima, eu poderia restringir quais os dominios que ele poderia ter acesso, ou outras configurações de segurança */
/* Iniciando o DB */
mongoose.connect(
"mongodb://localhost:27017/nodeapi",
 { useNewUrlParser: true }
 ); /* Se tiver usuario e senha passar "mongodb://user@password..." */
/* rota raiz / REQuisição para o servidor(pego parametros, corpo, usuario dessa requisição) /RESposta(response) que será dada a requisição. Fluxo de requisição e resposta *///Primeira Rota

/* Nosso model necessita da conexão com o BD iniciada por isso, o idel é chamá-lo aqui */
requireDir("./src/models");
/* Agora tenho acesso para poder inserir/atualizar novos valores */
//const Product = mongoose.model("Product"); antes de passar pra rotas

/* Rotas */
app.use("/api", require("./src/routes"));
/* Use - vai receber todo tipo de requisição (get, post, put, del, todas...) 
    Quando receber um arquivo pela rota api(definir o nome api é opcional), e manda pra rota routes */

app.listen(3001);