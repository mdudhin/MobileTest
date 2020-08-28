import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from './redux/store';
import Rooter from './Rooter';

const {store, persistor} = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <StatusBar backgroundColor="transparent" translucent={true} /> */}
        <Rooter />
      </PersistGate>
    </Provider>
  );
}
