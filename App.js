import React, { Component } from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './configureStore';
import { Provider } from 'react-redux'
import  RootComponent  from './RootComponent.js'


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootComponent/>
        </PersistGate>
      </Provider>
    );
  }
}
