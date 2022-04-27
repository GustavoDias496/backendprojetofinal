const mongoose = require('mongoose')

const Saida = mongoose.model('Saida',{
    nome: String,
    valorUnitario: Number,
    quantidade: Number,
    descricao: String,
    valorTotal: Number,
})

module.exports = Saida