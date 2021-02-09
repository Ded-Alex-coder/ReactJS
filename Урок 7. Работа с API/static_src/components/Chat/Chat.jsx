import React from 'react';
import PropTypes from 'prop-types';
import { Message } from '../Message/Message';
import { MessageList } from '../MessageList/MessageList';
import { ChatForm } from '../ChatForm/ChatForm';

import './Chat.css';

export const Chat = ({ isLoading, error, messages, onSendMessage }) => {
  if (isLoading) {
    return <div>Загрузка чатов</div>;
  }
  if (error) {
    return <div>Ошибка подключения</div>;
  }
  if (messages) {
    return (
      <div className="chat__main-chat">
        {messages.length ? (
          <MessageList messages={messages} />
        ) : (
          <div className="info-block">Нет сообщений</div>
        )}
        <ChatForm onSendMessage={onSendMessage} />
      </div>
    );
  } else {
    return (
      <div className="chat__main-chat">
        <div className="info-block">Выберите чат</div>
      </div>
    );
  }
};

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
  onSendMessage: PropTypes.func.isRequired,
};
