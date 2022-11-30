import {} from "mysql2";
const sequelize = require("sequelize")
const connection = require("./connect")


const cadastroCliente = connection.define("cadastroCliente", {
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
    nomeSocial: {
        type:sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type:sequelize.STRING,
        allowNull: false
    },
    genero: {
        type:sequelize.STRING,
        allowNull: false
    }
})
cadastroCliente.sync({ alter: true });
module.exports = cadastroCliente;
