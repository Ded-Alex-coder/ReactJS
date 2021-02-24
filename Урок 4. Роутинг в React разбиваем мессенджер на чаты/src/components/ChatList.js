import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { List, ListItem } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '30%',
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
  a: {
    textDecoration: 'none',
    color: 'Black',
  },
}));

export default function ChatList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <Link className={classes.a} to="/chat/id1/">
        <ListItem>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Chat 1" />
        </ListItem>
      </Link>

      <Link className={classes.a} to="/chat/id2/">
        <ListItem>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Chat 2" />
        </ListItem>
      </Link>

      <Link className={classes.a} to="/chat/id3/">
        <ListItem>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Chat 3" />
        </ListItem>
      </Link>
    </List>
  );
}
