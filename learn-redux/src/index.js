import React from 'react';
import ReactDOM from 'react-dom';
// import createStore and root reducer
import { createStore } from "redux";
import rootReducer from './store/modules';

// import provider
import { Provider } from "react-redux";

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// connect redux devtools
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
