import {  } from 'mysql2';
const Sequelize = require('sequelize');

const database = require('./connect')
const clienteId = require('./clienteTable')
const servicoId = require('./servicoTable')

clienteId.belongsToMany(servicoId, { through: 'clienteServicos' });
servicoId.belongsToMany(clienteId, { through: 'clienteServicos' });

const clienteServicos = database.define('clienteServicos', {
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
    servicoId: {
        type: Sequelize.INTEGER,
        references: {
          model: servicoId, 
          key: 'id'
        }
    }
})

//clienteServicos.sync({ alter: true });

module.exports = clienteServicos;
