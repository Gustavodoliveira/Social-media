import { legacy_createStore as createStore } from 'redux';

import rootReducer from './modules/rootReducer';

const Store = createStore(rootReducer);

export default Store;
