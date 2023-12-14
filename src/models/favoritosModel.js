const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Importa o modelo produtoModel
const produtoSchema = require('./src/models/produtoModel');

const favoritosItemSchema = new Schema({
  produto: { type: produtoSchema, required: true },
});

const favoritosSchema = new Schema({
  itens: { type: [favoritosItemSchema], required: true },
});

module.exports = mongoose.model('favoritosModel', favoritosSchema);
