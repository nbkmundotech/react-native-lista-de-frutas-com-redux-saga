export const adicionarItem = (nome) => {
  return {
    type: 'ADICIONAR_ITEM',
    nome: nome,
    id: 'abc' + Math.random()
  }
};

export const removerItem = (id) => {
  return {
    type: 'REMOVER_ITEM',
    id
  };
};

export const limparLista = () => {
  return {
    type: 'LIMPAR_LISTA'
  };
};
