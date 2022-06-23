import React from 'react'
import ReactDOM from 'react-dom/client'

import { ToDo } from './components/ToDo/ToDo';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './store/store';

import './global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToDo />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
