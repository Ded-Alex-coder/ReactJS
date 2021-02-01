import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Router';
import { Provider } from 'react-redux';
import initStore from './utils/store';

ReactDOM.render(
  <Provider store={initStore()}>
    <Routes />
  </Provider>,
  document.getElementById('app')
);
