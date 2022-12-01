import {  } from 'mysql2';
const Sequelize = require('sequelize');

const database = require('./connect')
const clienteId = require('./clienteTable')
const telefoneId = require('./telefoneTable')

clienteId.belongsToMany(telefoneId, { through: 'clienteTelefones' });
telefoneId.belongsToMany(clienteId, { through: 'clienteTelefones' });

const clienteTelefone = database.define('clienteTelefone', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    clienteId: {
        type: Sequelize.INTEGER,
        references: {
          model: clienteId, 
          key: 'id'
        }
      },
      telefoneId: {
          type: Sequelize.INTEGER,
          references: {
            model: telefoneId, 
            key: 'id'
         }
      }
})

//clienteTelefone.sync({ alter: true });


module.exports = clienteTelefone;