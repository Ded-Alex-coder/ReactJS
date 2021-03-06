import React, { useCallback, useState, useRef, useEffect } from 'react';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from './Message';

export default function MessageField({ onAddMessage }) {
  const [value, setValue] = useState(' ');

  const handleChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const handleSambmit = useCallback(
    (event) => {
      event.preventDefault();
      onAddMessage(value);
      setValue('');
    },
    [onAddMessage, value]
  );

  const inputFocus = useRef('');

  useEffect(() => {
    inputFocus.current.focus();
  }, []);

  return (
    <div>
      <form className="message-form" onSubmit={handleSambmit}>
        <TextField
          name="input"
          fullWidth={true}
          hintText="Введите сообщение"
          style={{ fontSize: '1.5rem' }}
          onChange={handleChange}
          value={value}
          ref={inputFocus}
        />
        <FloatingActionButton onClick={handleSambmit} className="submit-btn">
          <SendIcon />
        </FloatingActionButton>
      </form>
    </div>
  );
}
