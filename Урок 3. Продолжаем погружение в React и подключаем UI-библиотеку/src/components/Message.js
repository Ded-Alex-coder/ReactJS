import React from 'react';

export default function Message({ message }) {
  return (
    <div
      className="message"
      style={{
        alignSelf: message.author === 'robotChappi' ? 'flex-start' : 'flex-end',
      }}
    >
      <h5>{message.author}</h5>
      <p>{message.text}</p>
    </div>
  );
}
