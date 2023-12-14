const FavoritosModel = require('../models/favoritosModel');

const FavoritosController = {
  adicionarItem: async (favoritosId, novoItem) => {
    try {
      const favoritos = await FavoritosModel.findById(favoritosId);

      if (!favoritos) {
        // Cria uma nova lista de favoritos se não existir
        const novaListaFavoritos = await FavoritosModel.create({ itens: [novoItem] });
        return novaListaFavoritos;
      }

      // Verifica se o produto já está na lista de favoritos
      const itemExistente = favoritos.itens.find(item => item.produto.id === novoItem.produto.id);

      if (!itemExistente) {
        // Adiciona um novo item à lista de favoritos
        favoritos.itens.push(novoItem);

        // Salva as alterações na lista de favoritos
        await favoritos.save();
      }

      return favoritos;
    } catch (error) {
      throw new Error('Erro ao adicionar item à lista de favoritos: ' + error.message);
    }
  },

  removerItem: async (favoritosId, itemId) => {
    try {
      const favoritos = await FavoritosModel.findById(favoritosId);

      if (!favoritos) {
        throw new Error('Lista de favoritos não encontrada');
      }

      // Filtra os itens, mantendo apenas os que não têm o ID correspondente
      favoritos.itens = favoritos.itens.filter(item => item._id.toString() !== itemId);

      // Salva as alterações na lista de favoritos
      await favoritos.save();

      return favoritos;
    } catch (error) {
      throw new Error('Erro ao remover item da lista de favoritos: ' + error.message);
    }
  },

  removerTodosItens: async (favoritosId) => {
    try {
      const favoritos = await FavoritosModel.findById(favoritosId);

      if (!favoritos) {
        throw new Error('Lista de favoritos não encontrada');
      }

      // Remove todos os itens da lista de favoritos
      favoritos.itens = [];

      // Salva as alterações na lista de favoritos
      await favoritos.save();

      return favoritos;
    } catch (error) {
      throw new Error('Erro ao remover todos os itens da lista de favoritos: ' + error.message);
    }
  },

  exibirTodosItens: async (favoritosId) => {
    try {
      const favoritos = await FavoritosModel.findById(favoritosId);

      if (!favoritos) {
        throw new Error('Lista de favoritos não encontrada');
      }

      return favoritos.itens;
    } catch (error) {
      throw new Error('Erro ao exibir todos os itens da lista de favoritos: ' + error.message);
    }
  },
};

module.exports = FavoritosController;
