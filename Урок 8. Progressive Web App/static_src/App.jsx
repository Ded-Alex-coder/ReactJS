import React from 'react';
import ChatContainer from './containers/ChatContainer/ChatContainer';
import { Header } from './components/Header/Header';
import ChatListContainer from './containers/ChatListContainer/ChatListContainer';
import { Profile } from './components/Profile/Profile';
import { Switch, Route, Link } from 'react-router-dom';
import { initStore, history } from './store/index.js';
import { Provider } from 'react-redux';
import { fetchChats } from './store/chatOperations';
import { ConnectedRouter } from 'connected-react-router';

import './styles/styles.css';

const store = initStore();
store.dispatch(fetchChats());

export const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact>
            {' '}
            It;s index page. <Link to="/chats">К чатам</Link>
          </Route>
          <Route path="/about">it's about page</Route>
          <Route path="/profile" exact component={Profile} />
          <Route path="/chats/">
            <Header />
            <div className="chat">
              <ChatListContainer />
              <Switch>
                <Route path="/chats" exact component={ChatContainer} />
                <Route path="/chats/:id" exact component={ChatContainer} />
              </Switch>
            </div>
          </Route>
          <Route path="/">it's 404 page</Route>
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};
