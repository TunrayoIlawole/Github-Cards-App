import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Toaster } from 'react-hot-toast';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <Toaster />
      <App title = "The GitHub Cards App" />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
