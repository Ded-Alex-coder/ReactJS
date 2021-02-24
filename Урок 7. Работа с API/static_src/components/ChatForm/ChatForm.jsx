import React, {useState, useRef, useEffect} from "react";
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useInput} from '../../hooks/useInput'

import './ChatForm.css';

export const ChatForm = ({ onSendMessage }) => {
    const [name, setName] = useInput('User');
    const [content, setContent, setContentState] = useInput('');
    const textarea = useRef();

    const onSubmit = () => {
        onSendMessage({ name, content });
        setContentState('');
        textarea.current.focus();
    }

    return (<div className="form-wrapper">
        <form className="form">
            <TextField
                label="Введите Имя"
                id="standard-basic"
                name="name"
                value={name}
                onChange={setName}
                required
            />
            <br/>
            <TextField
                inputRef={textarea}
                label="Введите cообщение"
                autoFocus
                multiline
                required
                id="standard-basic"
                name="content"
                placeholder="Введите наше сообщение..."
                value={content}
                onChange={setContent}
            /><br/>
            <Button
                variant="contained"
                color="primary"
                onClick={onSubmit}>
                Отправить сообщение
            </Button>
        </form>
        </div>
    );
}

ChatForm.propTypes = {
    onSendMessage: PropTypes.func.isRequired,
}