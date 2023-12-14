const produtoModel = require('../models/produtoModel');

// Criar um novo produto
exports.createProduto = async (req, res) => {
  try {
    const novoProduto = new produtoModel(req.body);
    const produtoSalvo = await novoProduto.save();
    res.status(201).json(produtoSalvo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o produto' });
  }
};

// Atualizar um produto existente
exports.updateProduto = async (req, res) => {
  try {
    const { id } = req.params;
    const produtoAtualizado = await produtoModel.findOneAndUpdate({ id: id }, req.body, {
      new: true,
    });
    res.json(produtoAtualizado);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o produto' });
  }
};

// Recuperar todos os produtos
exports.getAllProdutos = async (req, res) => {
  try {
    const produtos = await produtoModel.find();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao recuperar os produtos' });
  }
};

// Recuperar um produto por ID
exports.getProdutoById = async (req, res) => {
  try {
    const { id } = req.params;
    const produto = await produtoModel.findOne({ id: id });
    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.json(produto);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao recuperar o produto' });
  }
};

// Remover um produto
exports.deleteProduto = async (req, res) => {
  try {
    const { id } = req.params;
    await produtoModel.findOneAndRemove({ id: id });
    res.json({ message: 'Produto removido com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover o produto' });
  }
};
