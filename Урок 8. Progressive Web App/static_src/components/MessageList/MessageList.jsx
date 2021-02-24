import React from "react";
import PropTypes from 'prop-types';
import { Message } from '../Message/Message';

import './MessageList.css';

export const MessageList = ({ messages }) => {
    return (<div className="chat__messages">
        {messages.map((item, index) => <Message {...item} key={index} />)}
        </div>
    );
}
MessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
}