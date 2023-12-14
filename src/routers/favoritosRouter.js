const express = require('express');
const router = express.Router();
const FavoritosController = require('../controllers/favoritosController');

// Adicionar item à lista de favoritos
router.post('/:favoritosId/adicionarItem', async (req, res) => {
  const { favoritosId } = req.params;
  const novoItem = req.body;

  try {
    const favoritosAtualizada = await FavoritosController.adicionarItem(favoritosId, novoItem);
    res.json(favoritosAtualizada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Remover item da lista de favoritos
router.delete('/:favoritosId/removerItem/:itemId', async (req, res) => {
  const { favoritosId, itemId } = req.params;

  try {
    const favoritosAtualizada = await FavoritosController.removerItem(favoritosId, itemId);
    res.json(favoritosAtualizada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Remover todos os itens da lista de favoritos
router.delete('/:favoritosId/removerTodosItens', async (req, res) => {
  const { favoritosId } = req.params;

  try {
    const favoritosAtualizada = await FavoritosController.removerTodosItens(favoritosId);
    res.json(favoritosAtualizada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obter todos os itens da lista de favoritos
router.get('/:favoritosId/exibirTodosItens', async (req, res) => {
  const { favoritosId } = req.params;

  try {
    const itensFavoritos = await FavoritosController.exibirTodosItens(favoritosId);
    res.json(itensFavoritos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
