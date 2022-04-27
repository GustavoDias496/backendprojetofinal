const mongoose = require('mongoose')

const Entrada = mongoose.model('Entrada',{
    nome: String,
    valorUnitario: Number,
    quantidade: Number,
    descricao: String,
    valorTotal: Number,
})

module.exports = Entrada