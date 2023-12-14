const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Importa o modelo produtoModel
const produtoSchema = require('./src/models/produtoModel');

const carrinhoItemSchema = new Schema({
  produto: { type: produtoSchema, required: true },
  quantidade: { type: Number, required: true, default: 1 },
});

const carrinhoSchema = new Schema({
  itens: { type: [carrinhoItemSchema], required: true },
});

module.exports = mongoose.model('carrinhoModel', carrinhoSchema);
