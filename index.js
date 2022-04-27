// configuração inicial
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

//forma de ler json
app.use(
    express.urlencoded({
        extended: true
    }),
)

app.use(express.json())

//rotas pessoas da API 
const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)

//rotas entradas da API
const entradaRoutes = require('./routes/entradaRoutes')
app.use('/entrada', entradaRoutes)

//rotas saidas da API
const saidaRoutes = require('./routes/saidaRoutes')
app.use('/saida', saidaRoutes)

//rota inicial/endpoint
app.get('/', (req, res) =>{

    //mostrar requisição

    res.json({message: 'Oi express'})
})

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

//entregar porta
mongoose
    .connect(
            `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.endos.mongodb.net/bancodaapi?retryWrites=true&w=majority`
        )
    .then(() =>{
        console.log("Conectamos ao MongoDB!")
        app.listen(5000)
    })
    .catch((err) => console.log(err))

