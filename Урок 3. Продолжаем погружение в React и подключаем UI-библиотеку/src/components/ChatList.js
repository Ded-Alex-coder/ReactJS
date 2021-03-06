import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '30%',
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
}));

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem button style={style} key={index}>
      <ListItemText primary={`Chat ${index + 1}`} />
    </ListItem>
  );
}

// renderRow.propTypes = {
//   index: PropTypes.number.isRequired,
//   style: PropTypes.object.isRequired,
// };

export default function ChatList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FixedSizeList height={400} itemSize={46} itemCount={5}>
        {renderRow}
      </FixedSizeList>
    </div>
  );
}
