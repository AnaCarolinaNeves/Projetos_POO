import {  } from 'mysql2';
const Sequelize = require('sequelize');
const database = require('./connect')

 
const telefones = database.define('telefones', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    ddd: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    numero: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    }
})

//telefones.sync({ alter: true });

module.exports = telefones;
