import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import storage from '@react-native-community/async-storage';

import rootReducer from './Reducer/index';

let middlewares = applyMiddleware(thunk);

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer, middlewares);
  let persistor = persistStore(store);
  return {store, persistor};
};
