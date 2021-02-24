import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import { sendMessage } from '../actions/messageActions';
import usePrevious from './usePrevious';
import MessageField from './MessageField';
import Header from './Header';
import ChatList from './ChatList';

import '../app.scss';

function Layout(props) {
  const [messages, setMessages] = useState({
    1: { text: 'Привет!', author: 'robotChappi' },
    2: { text: 'Здравствуйте!', author: 'robotChappi' },
  });

  // const renderMessage = useCallback((message, i) => {
  //   return <Message message={message} key={i} />;
  // }, []);

  const sendMessage = (message, author) => {
    const { chatId } = props;
    const messageId = Object.keys(messages).length + 1;
    setMessages({
      ...messages,
      [messageId]: { text: message, author: author },
    });
    props.sendMessage(messageId, message, author, chatId);
  };

  const prevMessages = usePrevious(messages);
  useEffect(() => {
    let timeout;
    if (
      Object.keys(prevMessages.messages).length <
        Object.keys(messages).length &&
      Object.values(messages)[Object.values(messages).length - 1].sender ===
        'User'
    )
      timeout = setTimeout(() => {
        sendMessage('Чё, кого!', 'robotChappi');
      }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, [messages, sendMessage]);

  return (
    <div className="layout">
      <h1>Разработка мессенджера </h1>
      <Header chatId={props.chatId} />
      <div className="chat">
        <ChatList />
        <div className="wrapper">
          <div className="message-field"></div>
          <div className="input-message">
            <MessageField
              chatId={props.chatId}
              messages={setMessages}
              sendMessage={sendMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
