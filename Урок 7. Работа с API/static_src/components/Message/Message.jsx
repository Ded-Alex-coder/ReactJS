import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classname';

import './Message.css';

export const Message = ({name, content}) => {
    const className = classname("message", {'message--robot': name === 'Robot'});
    return <div className={className}><strong>{name}: </strong> {content}</div>;
}

Message.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}