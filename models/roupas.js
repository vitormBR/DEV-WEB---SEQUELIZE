const { DataTypes } = require('sequelize');
const sequelize = require('../config/bd');

const Roupa = sequelize.define(
  'Roupa', 
  {
    nome_peca : {
      type: DataTypes.STRING,
    },
    ano_fabricacao: {
      type: DataTypes.INTEGER,
    },
    preco : {
      type: DataTypes.FLOAT,
    }
  },
  {
    tableName: 'Roupas',
    timestamps: true
  }
);

module.exports = Roupa;