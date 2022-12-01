import {} from "mysql2";
const sequelize = require("sequelize")
const connection = require("./connect")


const cadastroProduto = connection.define("cadastroProduto", {
    id: {
        type:sequelize.INTEGER, 
        autoIncrement: true,
        allowNull: false,
        primaryKey: true

    },
    nome: {
        type:sequelize.STRING,
        allowNull: false
    },
    preco: {
        type:sequelize.FLOAT,
        allowNull: false
    }
   
})
cadastroProduto.sync({ alter: true });
module.exports = cadastroProduto;
