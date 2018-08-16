import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import ExtensionOutlinedIcon from '@material-ui/icons/ExtensionOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import Web from '@material-ui/icons/Web';
import CardTravel from '@material-ui/icons/CardTravel';

const styles = theme => ({
  selected: {
    color: 'green',
    background: 'red',
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    fontWeight:'400',
    color:'rgba(0, 0, 0, 0.87)'
  },
});


function MenuList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button component={Link} to="Dashboard">
          <ListItemIcon>
            <HomeOutlinedIcon/>
          </ListItemIcon>

          <ListItemText primary="Dashboard" disableTypography='true'/>
        </ListItem>
        {/* <Divider /> */}
        <ListItem button component={Link} to="Kompetanse">
          <ListItemIcon >
            <ExtensionOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Add Skill" disableTypography='true'/>
        </ListItem>

        <ListItem button component={Link} to="Portfolio">
          <ListItemIcon >
            <CardTravel />
          </ListItemIcon>
          <ListItemText primary="Add Project" disableTypography='true'/>
        </ListItem>

        <ListItem button component={Link} to="Tasklist">
          <ListItemIcon >
            <Web />
          </ListItemIcon>
          <ListItemText primary="Tasks" disableTypography='true'/>
        </ListItem>

      </List>
    </div>


  );
}

MenuList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuList);
