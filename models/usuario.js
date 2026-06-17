const { DataTypes } = require('sequelize');
const sequelize = require('../config/bd');

const usuario = sequelize.define(
    'usuario',
    {
       nome : {
         type: DataTypes.STRING,
       },
       email :{
         type : DataTypes.STRING,
       },
       
    }
);