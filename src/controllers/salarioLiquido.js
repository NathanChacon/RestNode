const salarioLiquidoModel = require('../models/salarioLiquido')

const getSalarioById = (id) => {
    salarioLiquidoModel.findAll().then(
        (result) => {
            console.log('opa')
            console.log(result)
        },
        (error) => {
            console.log(error)
        }
    )
}

module.exports = {
    getSalarioById: getSalarioById()
}