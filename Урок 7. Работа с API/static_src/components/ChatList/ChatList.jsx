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

export const ChatList = ({ isLoading, error, chats, createChat }) => {
  const [name, setName, setNameState] = useInput('');

  const handleAddChat = (event) => {
    event.preventDefault();
    createChat(name);
    setNameState('');
  };

  if (isLoading) {
    return <div>Загрузка чатов</div>;
  }
  if (error) {
    return null;
  }

  return (
    <div className="chat__chatlist">
      <List component="nav">
        {chats.map(({ id, name, fire }) => (
          <ListItem key={id} button component={Link} to={'/chats/' + id}>
            <ListItemText primary={name} />
            {fire && (
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
            )}
          </ListItem>
        ))}
      </List>
      <div>
        <form>
          <TextField
            label="Создать новый чат"
            autoFocus
            multiline
            required
            id="standard-basic"
            name="content"
            placeholder="Название чата"
            value={name}
            onChange={setName}
          />
          <Button variant="contained" color="primary" onClick={handleAddChat}>
            Создать чат
          </Button>
        </form>
      </div>
    </div>
  );
};
