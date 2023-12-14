const express = require('express');
const router = express.Router();
const CarrinhoController = require('./controllers/carrinhoController');

// Adicionar item ao carrinho
router.post('/:carrinhoId/adicionarItem', async (req, res) => {
  const { carrinhoId } = req.params;
  const novoItem = req.body;

  try {
    const carrinhoAtualizado = await CarrinhoController.adicionarItem(carrinhoId, novoItem);
    res.json(carrinhoAtualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Atualizar item no carrinho
router.put('/:carrinhoId/atualizarItem/:itemId', async (req, res) => {
  const { carrinhoId, itemId } = req.params;
  const novoItem = req.body;

  try {
    const carrinhoAtualizado = await CarrinhoController.atualizarItem(carrinhoId, itemId, novoItem);
    res.json(carrinhoAtualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Remover item do carrinho
router.delete('/:carrinhoId/removerItem/:itemId', async (req, res) => {
  const { carrinhoId, itemId } = req.params;

  try {
    const carrinhoAtualizado = await CarrinhoController.removerItem(carrinhoId, itemId);
    res.json(carrinhoAtualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ler todos os itens no carrinho
router.get('/:carrinhoId/obterTodosItens', async (req, res) => {
  const { carrinhoId } = req.params;

  try {
    const itensNoCarrinho = await CarrinhoController.obterTodosItens(carrinhoId);
    res.json(itensNoCarrinho);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
