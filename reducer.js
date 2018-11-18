const initialState = {
  frutas: [],
  frutasCarregando: false,
  frutasErro: null
};

export default function(state = initialState, action) {
  console.log('Reducer recebeu action:', action);

  // Exercicio de Refatorizacao usando o Switch:
  // switch (action.type) {
  //   case 'OBTER_ITEMS_REQUERIDO':
  //     return { ... };
  //   case 'OBTER_ITEMS_COMPLETOU':
  //     return { ... };
  // }

  if (action.type === 'OBTER_ITEMS_REQUERIDO') {
    return {
      ...state,
      frutasCarregando: true
    };
  }
  else if (action.type === 'OBTER_ITEMS_COMPLETOU') {
    return {
      ...state,
      frutasCarregando: false,
      frutas: action.frutas
    };
  }
  else if (action.type === 'OBTER_ITEMS_FALHOU') {
    return {
      ...state,
      frutasCarregando: false,
      frutasErro: action.erro.message
    };
  }
  else if (action.type === 'ADICIONAR_ITEM_COMPLETOU') {
    return {
      ...state,
      frutas: state.frutas.concat([
        action.fruta
      ])
    };
  } else if (action.type === 'ADICIONAR_ITEM_FALHOU') {
    return {
      ...state,
      frutasErro: action.erro.message
    };
  }
  else if (action.type === 'REMOVER_ITEM_COMPLETOU') {
    return {
      ...state,
      frutas: state.frutas.filter(item => item.id !== action.id)
    };
  }
  else if (action.type === 'REMOVER_ITEM_FALHOU') {
    return {
      ...state,
      frutasErro: action.erro.message
    };
  }
  else if (action.type === 'LIMPAR_LISTA_COMPLETOU') {
    return {
      ...state,
      frutas: []
    };
  } else if (action.type === 'LIMPAR_LISTA_FALHOU') {
    return {
      ...state,
      frutasErro: action.erro.message
    };
  }

  return state;
}
