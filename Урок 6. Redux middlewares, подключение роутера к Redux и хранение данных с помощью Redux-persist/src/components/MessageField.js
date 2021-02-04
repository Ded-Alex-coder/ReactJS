import React, { useCallback, useState } from 'react';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
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

function MessageField() {
  const classes = useStyles();

  const [input, setInput] = useState(' ');

  const handleSendMessage = (message, author) => {
    if (input.length > 0 || author === 'robotChappi') {
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

  // const handleChange = useCallback((event) => {
  //   setValue(event.target.value);
  // });

  const handleSambmit = useCallback((event) => {
    event.preventDefault();

    setInput('');
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

const mapStateToProps = ({ chatReducer }) => ({
  chats: chatReducer.chats,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);
