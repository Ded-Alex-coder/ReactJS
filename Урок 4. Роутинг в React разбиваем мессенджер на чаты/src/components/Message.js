import React from 'react';

export default function Message(props) {
  return (
    <div
      className={
        props.author === 'robotChappi' ? 'message_robot' : 'message_user'
      }
    >
      <h5 className="titel_user">{props.author}</h5>
      <p className="user_text">{props.text}</p>
    </div>
  );
}
