const Sequelize = require('sequelize')
const database = require('../config/database')

const SalarioLiquido = database.define('Salario',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    preco: {
        type: Sequelize.DECIMAL
    }
});

module.exports = SalarioLiquido