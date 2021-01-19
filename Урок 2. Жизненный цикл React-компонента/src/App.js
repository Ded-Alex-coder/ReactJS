import React, { useEffect, useState, useCallback } from 'react';
import MessageField from './components/MessageField';
import Message from './components/Message';

import './app.scss';

function App() {
  const [messages, setMessages] = useState([
    { author: 'User', text: 'Кто здесь?' },
  ]);

  const renderMessage = useCallback((message, i) => {
    return <Message message={message} key={i} />;
  });

  const handleAddMessage = useCallback((text, author = 'User') => {
    setMessages((prevMessages) => [...prevMessages, { author, text }]);
  }, []);

  useEffect(() => {
    let timeout;
    if (
      messages[messages.length - 1].author !== 'robotChappi' &&
      messages.length > 1
    )
      timeout = setTimeout(() => {
        handleAddMessage('Чё, кого!', 'robotChappi');
      }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, [messages, handleAddMessage]);

  return (
    <div className="full-screen">
      <h1>Разработка мессенджера </h1>
      <div className="wrapper">
        <div className="window-message">{messages.map(renderMessage)}</div>
        <div className="input-message">
          <MessageField onAddMessage={handleAddMessage} />
        </div>
      </div>
    </div>
  );
}

export default App;
