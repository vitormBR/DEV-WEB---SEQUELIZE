const express = require('express');

const exphbs = require('express-handlebars');

const sequelize = require('./config/bd');

const app = express();

app.engine(
  'handlebars',
  exphbs.engine({defaultLayout: false})
);

app.set(
  'view engine',
  'handlebars'
);









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