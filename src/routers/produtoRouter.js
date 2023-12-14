'use strict'

const express = require('express')

const produtoRouter = express.Router()

const produtoController = require('../controllers/produtoController')

produtoRouter.route('/api/produtos')
.get((req, res) => produtoController.getAllProdutos(req, res))
.post((req, res) => produtoController.createProduto(req, res))
.put((req, res) => produtoController.updateProduto(req, res))

produtoRouter.route('/api/produtos/:id')
.get((req, res) => produtoController.getProduto(req, res))
.delete((req, res) => produtoController.deleteProduto(req, res))

module.exports = produtoRouter