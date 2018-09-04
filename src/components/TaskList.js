import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Divider } from '@material-ui/core';


const styles = {
  root: {
    padding: "50px",
    margin: "50px"
  },
  title: {
  },
};



class TaskList extends Component {

  componentDidMount() {
    this.props.updateTitle("@Todo List");
  }



  render() {
    const { classes } = this.props;

    return <Fragment>
      <Paper className={classes.root}>
        <div className="displayBox">
          <h2>Tasks</h2>
          <Divider />
          <ul>
            <li>PropType checking</li>
            <li>Default Props</li>
            <li>Add drag and drop lists for "item order" editing</li>
          </ul>
        </div>
      </Paper>
    </Fragment>
  }


}


export default withStyles(styles)(TaskList);
