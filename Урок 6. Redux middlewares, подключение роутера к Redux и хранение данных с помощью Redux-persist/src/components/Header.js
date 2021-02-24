import React from 'react';

export default function Header(props) {
  return (
    <div className="chatname">
      <span>Чат {props.chatId}</span>
    </div>
  );
}
