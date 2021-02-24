import React from 'react';
import MessageField from './MessageField';
import Header from './Header';
import ChatList from './ChatList';

import '../app.scss';

function Layout(props) {
  return (
    <div className="layout">
      <h1>Разработка мессенджера </h1>
      <Header chatId={props.chatId} />
      <div className="chat">
        <ChatList />
        <div className="wrapper">
          <MessageField chatId={props.chatId} />
          <div className="input-message"></div>
        </div>
      </div>
    </div>
  );
}

Layout.defaultProps = { chatId: 'id1' };
export default Layout;
