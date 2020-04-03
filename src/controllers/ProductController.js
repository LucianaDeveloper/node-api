/* Esse ProductController vai lidar com as operações que podemos ter em determinado model. Listagem, criação, atualização, remoção, etc */
/* Importar o mongoose pois, vou lidar com banco de dados */
const mongoose = require("mongoose");

/* E vou importar meu model de Product */
const Product = mongoose.model("Product");
/* Exportando meu objeto com algumas funções */
module.exports = {/* Primeira funçao index que vai listar os registros de produtos dentro da minha base de dados */
  async index(req, res) {
    /* Para conseguir acesso através do parametro get no node ({base_url}/products?page=2 no insomnia): */ // desestruturação:
    const { page = 1 } = req.query; // query para parametros get
    // acima estou peganfo o parametro page que está no meu get
    /* Minha variavel produto */
    /* De find foi para o paginate após importação do mongoose. Dentro das chaves eu poderia declarar meus where, condições se desejassemos realizar algum filtro,  e na outra coloco qual é minha pagina atual e o tamanho da pagina que quero */
    const products = await Product.paginate({}, { page, limit: 10 }); // a proxima linha só executa depois que ele conseguir fazer a busca no meu bd
    
    /* json - Retorna em uma estrutura json - muito utilizado em api rest -
    (estrutura de dados: forma facil de ler e alterar dados) */
    return res.json(products); //boa estrutura já que usamos JS no back e no front end
    //agora que defini isso, vou inserir product no meu routes
  },// Criamos listagem
  /* Rota de detalhe */
  async show(req, res) {// aqui passamos esse id (chamar ele na rota)
    const product = await Product.findById(req.params.id); // params para o id definido na rota
    // e aqui pegamos o id que está nos parametros da rota 
    return res.json(product);
  }, // Criamos detalhe

  /* Criar novo Método, depois definir ele na rota */
  async store(req, res) {
    // Código de Criação 
    //puxando os campos que criei no insomnia. Como req contém todos os dados da requisição, sendo o corpo um desses dados. Assim declaramos da forma abaixo e vamos conter todos os dados que precisamos
    const product = await Product.create(req.body); // para o corpo da requisição
    // e retornamos o produto que acabou de ser criado na nossa base de dados (insomnia)
    return res.json(product);
  }, // Criamos a parte de criação

  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    /* Usamos o metodo findByIdAndUpdate, vou encontrar um produto pelo Id que vem lá dos parametros e vou atualiza-lo com o contéudo que vem do req.body. Com isso estamos meio que unindo a funionalidade dos show com a do store pois, estamos buscando um unico produto e atualizando as propridades que vem lá do meu body. Basicamente no 'new: true' eu estou dizendo para que o mongoose que ele retorne esse produto atualizado para dentro da minha variavel product. Se eu não passar o new ele vai retornar para o product o produto antes de atualizar as informações do req.body, ou seja, se atualizar o titulo, ele retorna com o titulo antiga, com o new ele retorna com o titulo atualizado */
    return res.json(product);
  }, // Criamos Atualizar

  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);

    return res.send(); // o send aqui porque só vai retornar uma mensagem de sucesso sem nenhum conteúdo
  } // Criamos Delete

  
};