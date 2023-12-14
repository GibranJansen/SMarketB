const compraModel = require('../models/compraModel');

// Criar uma nova compra
exports.createCompra = async (req, res) => {
  try {
    const novaCompra = new compraModel(req.body);
    const compraSalva = await novaCompra.save();
    res.status(201).json(compraSalva);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar a compra' });
  }
};

// Atualizar uma compra existente
exports.updateCompra = async (req, res) => {
  try {
    const { id } = req.params;
    const compraAtualizada = await compraModel.findOneAndUpdate(
      { id: id },
      req.body,
      {
        new: true,
      }
    );
    res.json(compraAtualizada);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar a compra' });
  }
};

// Recuperar todas as compras
exports.getAllCompras = async (req, res) => {
  try {
    const compras = await compraModel.find();
    res.json(compras);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao recuperar as compras' });
  }
};

// Recuperar uma compra por ID
exports.getCompraById = async (req, res) => {
  try {
    const { id } = req.params;
    const compra = await compraModel.findOne({ id: id });
    if (!compra) {
      return res.status(404).json({ error: 'Compra não encontrada' });
    }
    res.json(compra);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao recuperar a compra' });
  }
};

// Remover uma compra
exports.deleteCompra = async (req, res) => {
  try {
    const { id } = req.params;
    await compraModel.findOneAndRemove({ id: id });
    res.json({ message: 'Compra removida com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover a compra' });
  }
};
