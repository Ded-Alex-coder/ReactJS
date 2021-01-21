import React, { useEffect, useState, useCallback } from 'react';
import MessageField from './components/MessageField';
import Message from './components/Message';
import Header from './components/Header';
import ChatList from './components/ChatList';

import './app.scss';

function Layout() {
  const [messages, setMessages] = useState([
    { author: 'robotChappi', text: 'Напиши мне' },
  ]);

  const renderMessage = useCallback((message, i) => {
    return <Message message={message} key={i} />;
  });

  const handleAddMessage = useCallback((text, author = 'User') => {
    setMessages((prevMessages) => [...prevMessages, { author, text }]);
  }, []);

  useEffect(() => {
    let timeout;
    if (messages[messages.length - 1].author == 'User')
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
      <div className="chat">
        <ChatList />
        <div className="wrapper">
          <div className="message-field">{messages.map(renderMessage)}</div>
          <div className="input-message">
            <MessageField onAddMessage={handleAddMessage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
