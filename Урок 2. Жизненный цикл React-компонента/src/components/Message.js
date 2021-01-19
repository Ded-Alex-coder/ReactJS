import React from 'react';

export default function Message({ message }) {
  return (
    <div className="message-block">
      <h5>{message.author}</h5>
      <p>{message.text}</p>
    </div>
  );
}
