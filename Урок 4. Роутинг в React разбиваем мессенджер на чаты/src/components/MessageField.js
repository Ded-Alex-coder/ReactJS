import React, { useCallback, useState, useRef, useEffect } from 'react';
import Message from './Message';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function MessageField({ chatId }) {
  const [value, setValue] = useState(' ');

  const classes = useStyles();
  const [chats, setChats] = useState({
    id1: { title: 'Чат 1', messageList: ['id1'] },
    id2: { title: 'Чат 2', messageList: ['id2'] },
    id3: { title: 'Чат 3', messageList: ['id3'] },
  });
  const [messages, setMessages] = useState({
    id1: { text: 'Привет!', author: 'robotChappi' },
    id2: { text: 'Здравствуйте!', author: 'robotChappi' },
    id3: { text: 'Хай', author: 'robotChappi' },
  });
  const [input, setInput] = useState(' ');

  useEffect(() => {
    if (
      Object.values(messages)[Object.values(messages).length - 1].author ===
      'User'
    ) {
      setTimeout(
        () => handleSendMessage('Не приставай ко мне, я робот!', 'robotChappi'),
        1000
      );
    }
  }, [messages]);

  const handleSendMessage = (message, author) => {
    if (input.length > 0 || author === 'User') {
      const messageId = Object.keys(messages).length + 1;

      setMessages({
        ...messages,
        [messageId]: { text: message, author: author },
      });

      setChats({
        ...chats,
        [chatId]: {
          ...chats[chatId],
          messageList: [...chats[chatId]['messageList'], messageId],
        },
      });
    }
    if (author === 'User') {
      setInput('');
    }
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      handleSendMessage(input, 'User');
    }
  };

  const messageElements = chats[chatId].messageList.map((messageId, index) => {
    return (
      <Message
        key={index}
        text={messages[messageId].text}
        author={messages[messageId].author}
      />
    );
  });

  // const handleChanges = useCallback((event) => {
  //   setValue(event.target.value);
  // });

  const handleSambmit = useCallback((event) => {
    event.preventDefault();

    setValue('');
  }, []);

  return (
    <>
      <div key="messageElements" className="message-field">
        {messageElements}
      </div>
      ,
      <form key="textInput" className="message-form" onSubmit={handleSambmit}>
        <TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          onChange={handleChange}
          placeholder="Сообщение"
          fullWidth
          autoFocus
          value={input}
          onKeyUp={handleKeyUp}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SendIcon />}
          // onClick={handleSambmit}
          onClick={() => handleSendMessage(input, 'User')}
        >
          Send
        </Button>
      </form>
    </>
  );
}
