import React from 'react';
import Paper from '@material-ui/core/Paper';

const Style = {
  padding: '15px',
  textAlign: 'center',
  backgroundColor: '#303030',
  color: 'white',
};

const Header = (props) =>
  <Paper style={Style}>
    <h1>{props.title}</h1>
  </Paper>


export default Header;
