import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import myReducer from './Reducers/index.js';
import { Provider, useStore } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(myReducer);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);