import React from 'react';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import MenuList from './menuList';


const container = {
  backgroundColor: 'rgb(10, 114, 135)',
  color: 'white'
};

const head = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',

};

const avatar = {
  height: '100px',
  width: '100px',
  marginTop: '30px'
};

const Menu = (props) =>


  <Paper style={container}>
    <div style={head}>
      <Avatar alt="Remy Sharp" src={require('../img/avatar.png')} style={avatar} />
      <h1>{props.title}</h1>
    </div>
    <Divider />
    <MenuList />
  </Paper>


export default Menu;
