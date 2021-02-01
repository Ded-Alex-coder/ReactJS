import React from 'react';

export default function Message({ message }) {
  return (
    <div
      className={
        message.author === 'robotChappi' ? 'message_robot' : 'message_user'
      }
    >
      <h5 className=".titel_user">{message.author}</h5>
      <p className="user_text">{message.text}</p>
    </div>
  );
}
