const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const database = require('./src/config/database')
const salarioLiquidoControl = require('./src/controllers/salarioLiquido')

database.authenticate()
.then(() => console.log('yes'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen('8080', () => {
    console.log("Servidor rodando")
})

app.get('/inss/:id', (req,res) => {
    salarioLiquidoControl.getSalarioById(1)
})