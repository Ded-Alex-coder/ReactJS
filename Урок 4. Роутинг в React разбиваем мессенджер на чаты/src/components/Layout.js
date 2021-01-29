import React, { useEffect, useState, useCallback } from 'react';
import MessageField from './MessageField';
import Message from './Message';
import Header from './Header';
import ChatList from './ChatList';

import '../app.scss';

function Layout(props) {
  const [messages, setMessages] = useState([]);

  const renderMessage = useCallback((message, i) => {
    return <Message message={message} key={i} />;
  }, []);

  const handleAddMessage = useCallback((text, author = 'User') => {
    setMessages((prevMessages) => [...prevMessages, { author, text }]);
  }, []);

  useEffect(() => {
    let timeout;
    if (messages.length === 0 || messages[messages.length - 1].author == 'User')
      timeout = setTimeout(() => {
        handleAddMessage('Чё, кого!', 'robotChappi');
      }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, [messages, handleAddMessage]);

  return (
    <div className="layout">
      <h1>Разработка мессенджера </h1>
      <Header chatId={props.chatId} />
      <div className="chat">
        <ChatList />
        <div className="wrapper">
          <div className="message-field">{messages.map(renderMessage)}</div>
          <div className="input-message">
            <MessageField
              chatId={props.chatId}
              onAddMessage={handleAddMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
