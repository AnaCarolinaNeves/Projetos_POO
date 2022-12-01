import {} from "mysql2";
const sequelize = require("sequelize")
const connection = require("./connect")


const cadastroServico = connection.define("cadastroServico", {
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
cadastroServico.sync({ alter: true });
module.exports = cadastroServico;