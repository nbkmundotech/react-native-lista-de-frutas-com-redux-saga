let frutas = [
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
let ultimoId = 3;

const obterFrutas = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frutas);
      // reject(new Error('Deu problema em obter a lista'))
    }, 3000);
  });
};

const adicionarFruta = (nome) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject(new Error('Nao foi possivel criar um novo recorde'));
      const id = ++ultimoId;
      const novaFruta = {
        nome,
        id
      };
      frutas = frutas.concat([
        novaFruta
      ]);
      resolve(novaFruta);
    }, 3000);
  });
};

const removerFruta = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // if (id === 3) {
      //   reject(new Error('Nao foi possivel remover a fruta ' + id));
      // } else {
        frutas = frutas.filter(fruta => fruta.id !== id);
        resolve({});
      // }
      console.log('[backend>]', frutas);
    }, 3000);
  });
};

export default {
  obterFrutas,
  adicionarFruta,
  removerFruta
};
