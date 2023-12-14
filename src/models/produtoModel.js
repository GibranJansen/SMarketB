const mongoose = require('mongoose')
const Schema = mongoose.Schema

const produtoSchema = new Schema({
    id: {type: Number, required: true, unique: true},
    nome: {type: String, required: true},
    preco: {type: Number, required: true}
})

module.exports = mongoose.model("produtoModel", produtoSchema)