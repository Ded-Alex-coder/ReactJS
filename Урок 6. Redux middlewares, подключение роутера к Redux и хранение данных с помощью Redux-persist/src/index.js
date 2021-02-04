import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import initStore, { history } from './utils/store';

ReactDOM.render(
  <Provider store={initStore()}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('app')
);
