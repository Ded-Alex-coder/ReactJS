import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DraftsIcon from '@material-ui/icons/Drafts';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useInput } from '../../hooks/useInput';

import './ChatList.css';

export const ChatList = ({ isLoading, chats, createChat }) => {
  const [name, setName, setNameState] = useInput('');

  const handleAddChat = (event) => {
    event.preventDefault();
    createChat(name);
    setNameState('');
  };

  if (isLoading) {
    return <div>Загрузка чатов</div>;
  }
  return (
    <div className="chat__chatlist">
      <List component="nav">
        {chats.map(({ id, name }) => (
          <ListItem key={id} button component={Link} to={'/chats/' + id}>
            <ListItemText primary={name} />
            {/*                 <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>*/}
          </ListItem>
        ))}
      </List>
      <div>
        <form>
          <TextField
            label="Введите имя"
            autoFocus
            multiline
            required
            id="standard-basic"
            name="content"
            placeholder="Имя чата"
            value={name}
            onChange={setName}
          />
          <Button variant="contained" color="primary" onClick={handleAddChat}>
            Добавить чат
          </Button>
        </form>
      </div>
    </div>
  );
};
