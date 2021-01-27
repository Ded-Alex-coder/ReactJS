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

export default function MessageField({ onAddMessage }) {
  const [value, setValue] = useState(' ');
  const [chats, setChats] = useState({
    id1: { title: 'Чат 1', messageList: [1] },
    id2: { title: 'Чат 2', messageList: [2] },
    id3: { title: 'Чат 3', messageList: [3] },
  });
  const [messages, setMessages] = useState({
    id1: { text: 'Привет!', sender: 'bot' },
    id2: { text: 'Здравствуйте!', sender: 'bot' },
  });

  const classes = useStyles();

  const prevMessages = usePrevious(messages);
  useEffect(() => {
    let timeout;
    if (prevMessages.length < messages.length)
      timeout = setTimeout(() => {
        handleSendMessage('Не приставай ко мне, я робот!', 'bot');
      }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, [messages, handleSendMessage]);

  // handleSendMessage = (message, sender) => {
  //   const { messages, chats, input } = useState;
  //   const { chatId } = props;

  //   if (input.length > 0 || sender === 'bot') {
  //     const messageId = Object.keys(messages).length + 1;
  //     setState({
  //       messages: {
  //         ...messages,
  //         [messageId]: { text: message, sender: sender },
  //       },
  //       chats: {
  //         ...chats,
  //         [chatId]: {
  //           ...chats[chatId],
  //           messageList: [...chats[chatId]['messageList'], messageId],
  //         },
  //       },
  //     });
  //   }
  //   if (sender === 'me') {
  //     this.setState({ input: '' });
  //   }
  // };

  const handleChange = useCallback((event) => {
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
    <div>
      <form className="message-form" onSubmit={handleSambmit}>
        <TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          onChange={handleChange}
          placeholder="Сообщение"
          fullWidth
          autoFocus
          value={value}
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
          onClick={handleSambmit}
        >
          Send
        </Button>
      </form>
    </div>
  );
}
