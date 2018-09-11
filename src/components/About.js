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



class About extends Component {

  componentDidMount() {
    this.props.updateTitle("@Todo List");
  }



  render() {
    const { classes } = this.props;

    return <Fragment>
      <Paper className={classes.root}>
        <div className="displayBox">
          <h2>About</h2>
          <Divider />
          <ul>
         <p style={{fontWeight:"400"}}>This is a simple backend UI , used to add new projects and skills to :  <a style={{textDecoration:"none"}} href="https://danielnet.github.io/portfolio/#/">"Danielnet.github.io/portfolio"</a></p>
         <p>Now includes <span style={{color:"green"}}>React Redux </span></p>
         <p>Temporary API : "http://httpbin.org/post"</p>
          </ul>
        </div>
      </Paper>
    </Fragment>
  }


}


export default withStyles(styles)(About);
