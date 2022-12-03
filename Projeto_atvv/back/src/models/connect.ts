import {Sequelize} from "sequelize";
const connection = new Sequelize("worldbeauty", "root", "Ana05", {
    host: "localhost", 
    dialect: "mysql"
})
connection.authenticate().then(()=> console.log("Conexão realizada com sucesso!")).catch(()=> console.log("Conexão não estabelecida!"))

module.exports = connection