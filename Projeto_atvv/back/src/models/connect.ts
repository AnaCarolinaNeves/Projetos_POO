import {Sequelize} from "sequelize";
const connection = new Sequelize("WorldBeauty", "root", "africas2lucas", {
    host: "localhost", 
    dialect: "mysql"
})
connection.authenticate().then(()=> console.log("Conexão realizada com sucesso!")).catch(()=> console.log("Conexão não estabelecida!"))

module.exports = connection