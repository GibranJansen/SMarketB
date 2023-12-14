const CarrinhoModel = require('../models/carrinhoModel');

const CarrinhoController = {
  adicionarItem: async (carrinhoId, novoItem) => {
    try {
      const carrinho = await CarrinhoModel.findById(carrinhoId);

      if (!carrinho) {
        // Cria um novo carrinho se não existir
        const novoCarrinho = await CarrinhoModel.create({ itens: [novoItem] });
        return novoCarrinho;
      }

      // Verifica se o produto já está no carrinho
      const itemExistente = carrinho.itens.find(item => item.produto.id === novoItem.produto.id);

      if (itemExistente) {
        // Atualiza a quantidade se o produto já estiver no carrinho
        itemExistente.quantidade += novoItem.quantidade;
      } else {
        // Adiciona um novo item ao carrinho
        carrinho.itens.push(novoItem);
      }

      // Salva as alterações no carrinho
      await carrinho.save();

      return carrinho;
    } catch (error) {
      throw new Error('Erro ao adicionar item ao carrinho: ' + error.message);
    }
  },

  deletarItem: async (carrinhoId, itemId) => {
    try {
      const carrinho = await CarrinhoModel.findById(carrinhoId);

      if (!carrinho) {
        throw new Error('Carrinho não encontrado');
      }

      // Filtra os itens, mantendo apenas os que não têm o ID correspondente
      carrinho.itens = carrinho.itens.filter(item => item._id.toString() !== itemId);

      // Salva as alterações no carrinho
      await carrinho.save();

      return carrinho;
    } catch (error) {
      throw new Error('Erro ao deletar item do carrinho: ' + error.message);
    }
  },

  deletarTodosItens: async (carrinhoId) => {
    try {
      const carrinho = await CarrinhoModel.findById(carrinhoId);

      if (!carrinho) {
        throw new Error('Carrinho não encontrado');
      }

      // Remove todos os itens do carrinho
      carrinho.itens = [];

      // Salva as alterações no carrinho
      await carrinho.save();

      return carrinho;
    } catch (error) {
      throw new Error('Erro ao deletar todos os itens do carrinho: ' + error.message);
    }
  },
  exibirTodosItens: async (carrinhoId) => {
    try {
      const carrinho = await CarrinhoModel.findById(carrinhoId);

      if (!carrinho) {
        throw new Error('Carrinho não encontrado');
      }

      return carrinho.itens;
    } catch (error) {
      throw new Error('Erro ao exibir todos os itens do carrinho: ' + error.message);
    }
  },
};


module.exports = CarrinhoController;
