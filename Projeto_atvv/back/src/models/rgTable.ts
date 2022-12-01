import {  } from 'mysql2';
const Sequelize = require('sequelize');
const database = require('./connect')
const clienteId = require('./clienteTable')
 
const rgs = database.define('rgs', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    numero: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
})
rgs.belongsTo(clienteId, {
    constraint: true,
    foreignKey: 'clienteId'
})

//rgs.sync({ alter: true });

module.exports = rgs;
