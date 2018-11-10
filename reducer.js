const initialState = [
  {
    id: 1,
    nome: 'Banana'
  },
  {
    id: 2,
    nome: 'Morango'
  },
  {
    id: 3,
    nome: 'Pera'
  }
];

export default function(state = initialState, action) {
  console.log('Reducer recebeu action:', action);

  if (action.type === 'ADICIONAR_ITEM') {
    return state.concat([
      { nome: action.nome, id: action.id }
    ]);
  } else if (action.type === 'REMOVER_ITEM') {
    return state.filter(item => item.id !== action.id);
  } else if (action.type === 'LIMPAR_LISTA') {
    return [];
  }

  return state;
}
