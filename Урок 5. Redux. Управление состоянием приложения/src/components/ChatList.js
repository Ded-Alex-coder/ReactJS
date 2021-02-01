import React from 'react';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { List, ListItem } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SendIcon from '@material-ui/icons/Send';
import { addChat } from '../actions/chatActions';

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

function ChatList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <Link className={classes.a} to="/chat/1/">
        <ListItem>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Chat 1" />
        </ListItem>
      </Link>

      <Link className={classes.a} to="/chat/2/">
        <ListItem>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Chat 2" />
        </ListItem>
      </Link>

      <Link className={classes.a} to="/chat/3/">
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

const mapStateToProps = ({ chatReducer }) => ({
  chats: chatReducer.chats,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addChat }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
