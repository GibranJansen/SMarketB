'use strict'

const express = require('express')

const compraRouter = express.Router()

const compraController = require('../controllers/compraController')

compraRouter.route('/api/compras')
.get((req, res) => compraController.getAllCompras(req, res))
.post((req, res) => compraController.createCompra(req, res))
.put((req, res) => compraController.updateCompra(req, res))

compraRouter.route('/api/compras/:id')
.get((req, res) => compraController.getCompra(req, res))
.delete((req, res) => compraController.deleteCompra(req, res))

module.exports = compraRouter