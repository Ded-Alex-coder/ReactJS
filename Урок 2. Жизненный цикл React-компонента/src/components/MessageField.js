import React, { useCallback, useState } from 'react';
import Message from './Message';

export default function MessageField({ onAddMessage }) {
  const [value, setValue] = useState(' ');

  const handleChange = useCallback((event) => {
    setValue(event.target.value);
  });

  const handleSambmit = useCallback(
    (event) => {
      event.preventDefault();
      onAddMessage(value);
      if (value.trim()) {
        setValue('');
      }
    },
    [onAddMessage, value]
  );

  return (
    <div>
      <form className="message" onSubmit={handleSambmit}>
        <input
          type="text"
          placeholder="введите сообщение"
          value={value}
          onChange={handleChange}
        />
        <button type="submit" className="submit-btn">
          Отправить
        </button>
      </form>
    </div>
  );
}
