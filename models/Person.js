const mongoose = require('mongoose')

const Person = mongoose.model('Person',{
    name: String,
    salarty: Number,
    approved: Boolean,
})

module.exports = Person