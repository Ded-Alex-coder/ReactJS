import React from 'react';
import ReactDOM from 'react-dom';
import { script } from './script';

script();
console.log('А это index.js');

let messages = ['Привет', 'Как дела?'];

const MessageComponent = (props) => <div>{props.text}</div>;

const MessageField = (props) => {
  return props.messages.map((message) => <MessageComponent text={message} />);
};

ReactDOM.render(
  <MessageField messages={messages} />,
  document.getElementById('root')
);
