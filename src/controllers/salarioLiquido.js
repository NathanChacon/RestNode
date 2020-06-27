const salarioLiquidoModel = require('../models/salarioLiquido')

const getAll = () => {
    return salarioLiquidoModel.findAll()
}

const getSalarioById = (id) => {
    const condition = {where: {id:id}}
    return salarioLiquidoModel.findOne(condition)
    
}

const setSalario = (preco) => {
    return salarioLiquidoModel.create({
        preco:preco
    })
}

module.exports = {
    getAll,
    getSalarioById,
    setSalario
}