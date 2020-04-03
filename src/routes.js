const express = require("express"); // importando o express
const routes = express.Router(); /* Definindo variavel */
const ProductController = require("./controllers/ProductController");

/* Primeira Rota */ //product inserido aqui
  routes.get("/products", ProductController.index);
/* (req, res) => {  quando em server.js era app.get */
    //Product.create({/* Criando um produto fake */ // para testar rota
    //    title: "React Native",
    //    description: "Build native apps with React",
    //    url: "http://github.com/facebook/react-native"
//});
   // return res.send("Hello Rocketseat");/* A ultima coisa que terá dentro da rota */
   //});
  
   //Pegando produto pelo id
  routes.get("/products/:id", ProductController.show);// posso representar esse parametro dentro da rota, com : e o nome do parametro, e onde ele será chamado 

   /* Utilizamos o método post sempre que desejarmos criar algo no servidor */
   // Então sempre que estivermos chamando uma rota que vai criar alguma coisa, usamos post
   // Chamando nosso método ProductController store
  routes.post("/products", ProductController.store); 

  // Update
  routes.put("/products/:id", ProductController.update);

  // Delete
  routes.delete("/products/:id", ProductController.destroy);


module.exports = routes;