const express = require('express');

const exphbs = require('express-handlebars');

const sequelize = require('./config/bd');

const roupa = require('./models/roupas');

const produto = require('./models/produto');

const app = express();


app.engine(
  'handlebars',
  exphbs.engine({defaultLayout: false})
);

app.set(
  'view engine',
  'handlebars'
)

let roupas=[
  {
    id:1,
    nome:"Calça",
    imagem:"https://images.tcdn.com.br/img/img_prod/769687/calca_jeans_masculina_mais_comprida_longa_premium_jamer_2649_1_d32393952c59a63e5a115ae22d492fd0.jpg"
  },

  {
    id:2,
    nome:"Camisa",
    imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH3DLLXhcCMS-WygTr_U6ONufqAWY6aTZpLg&s"
  },

  {
    id:3,
    nome:"Vestido",
    imagem:"https://sacada.vtexassets.com/arquivos/ids/336778/01050154_0231_1-VESTIDO-CURTO-GOLA.jpg?v=639065953974530000"
  },
  
  {
    id:4,
    nome:"Boné",
    imagem:""
  },
]

app.get(
  '/',
  (req,res) => res.render('listarroupas' , {roupas})
)


app.get(
  '/', 
  (req, res) => {res.send('Testando o express!');
});

app.get(
  '/listar',
  async (req, res) => {
     const roupas = await roupa.findAll({raw: true});
    res.render('roupas', { Roupa });
});

app.get(
  '/criar',
  async(req, res) => {const novoRoupa = await roupa.create({
  nome_peca: 'Calça jeans',
  ano_fabricacao: 1999,
  preco: 19.99

});
res.send("ok")
});

app.get(
  '/read',
  async(req,res) => {
    const roupas = await roupa.findByPk(1)
    console.log(roupas.nome_peca);
    res.send(roupas)
});

app.get(
  '/delete',
  async(req, res) => {
  const roupas = await roupa.findByPk(1);
  await roupa.destroy();
});







async function conectarcombd(){
    try {
    await sequelize.sync();
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  } catch (erro) {
    console.error('Erro ao conectar:', erro);
  }
}

conectarcombd();


app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);