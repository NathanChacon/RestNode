const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const database = require('./src/config/database')
const salarioLiquidoControl = require('./src/controllers/salarioLiquido')

database.authenticate()
.then(() => console.log('Conectado ao banco'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen('8080', () => {
    console.log("Servidor rodando")
})

app.get('/salarioLiquido', (req,res) => {
    salarioLiquidoControl.getAll()
    .then(
        (result) => {
            res.status(200).send(result)
        },
        (error) => {
            res.status(500)
        }   
    )
})

app.get('/salarioLiquido/:id', async (req,res) => {
    const id = req.params.id
    salarioLiquidoControl.getSalarioById(id)
    .then(
        (result) => {
            res.status(200).send(result)
        },
        (error) => {
            res.status(400)
        }
    )
})

app.post('/salarioLiquido', (req,res) => {
    const preco = req.body.preco
    salarioLiquidoControl.setSalario(preco)
    .then(
        (result) => {
            res.status(201)
        },
        (error) => {
            res.status(500)
        }
    )
})