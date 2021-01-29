import React, { useCallback, useState, useRef, useEffect } from 'react';
import Message from './Message';
import usePrevious from './usePrevious';
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

export default function MessageField({ onAddMessage, chatId }) {
  const [value, setValue] = useState(' ');

  const [chats, setChats] = useState({
    id1: { title: 'Чат 1', messageList: [1] },
    id2: { title: 'Чат 2', messageList: [2] },
    id3: { title: 'Чат 3', messageList: [3] },
  });
  const [messages, setMessages] = useState({
    id1: { text: 'Привет!', sender: 'robotChappi' },
    id2: { text: 'Здравствуйте!', sender: 'robotChappi' },
  });
  const [input, setInput] = useState(' ');

  const classes = useStyles();

  const prevMessages = usePrevious(messages);
  useEffect(() => {
    let timeout;
    if (
      prevMessages.length < messages.length ||
      messages[messages.length - 1].author == 'User'
    )
      timeout = setTimeout(() => {
        handleSendMessage('Не приставай ко мне, я робот!', 'bot');
      }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, [messages, handleSendMessage]);

  // useEffect(() => {
  //   if (
  //     Object.values(messages)[Object.values(messages).length - 1].sender ===
  //     'User'
  //   ) {
  //     setTimeout(
  //       () => handleSendMessage('Не приставай ко мне, я робот!', 'robotChappi'),
  //       1000
  //     );
  //   }
  // }, [messages]);

  const handleSendMessage = (message, sender) => {
    if (input.length > 0 || sender === 'robotChappi') {
      const messageId = Object.keys(messages).length + 1;

      setMessages({
        ...messages,
        [messageId]: { text: message, sender: sender },
      });

      setChats({
        ...chats,
        [chatId]: {
          ...chats[chatId],
          messageList: [...chats[chatId]['messageList'], messageId],
        },
      });
    }
    if (sender === 'User') {
      setInput(''); // инпут либо обект с полями либо текстовое поле а у вас и то и другое
    }
  };

  const handleChange = (event) => {
    setInput({ [event.target.name]: event.target.value }); // инпут либо обект с полями либо текстовое поле а у вас и то и другое
  };

  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      handleSendMessage(input, 'User');
    }
  };

  const messageElements = chats[chatId].messageList.map((messageId, index) => (
    <Message
      key={index}
      text={messages[messageId].text}
      sender={messages[messageId].sender}
    />
  ));

  const handleChanges = useCallback((event) => {
    setValue(event.target.value);
  });

  const handleSambmit = useCallback(
    (event) => {
      event.preventDefault();
      onAddMessage(value);
      setValue('');
    },
    [onAddMessage, value]
  );

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
