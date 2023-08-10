import { legacy_createStore as createStore } from 'redux';

const Reducer = (state, action) => {
  switch (action.type) {
    case 'BOTAO_CLICADO':
      console.log('ouvindo teu botao');
      return state;

    default:
      return state;
  }
};
const Store = createStore(Reducer);

export default Store;
