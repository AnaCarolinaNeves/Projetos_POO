import {  } from 'mysql2';
const Sequelize = require('sequelize');

const database = require('./connect')
const clienteId = require('./clienteTable')
const produtoId = require('./produtoTable')

clienteId.belongsToMany(produtoId, { through: 'clienteProdutos' });
produtoId.belongsToMany(clienteId, { through: 'clienteProdutos' });

const clienteProdutos = database.define('clienteProdutos', {
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
      produtoId: {
          type: Sequelize.INTEGER,
          references: {
            model: produtoId, 
            key: 'id'
         }
      }
})

//clienteProdutos.sync({ alter: true });

module.exports = clienteProdutos;