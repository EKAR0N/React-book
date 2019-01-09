import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import * as serviceWorker from './serviceWorker';

import modules from './modules';

// eslint-disable-next-line no-underscore-dangle
const store = createStore(modules, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
