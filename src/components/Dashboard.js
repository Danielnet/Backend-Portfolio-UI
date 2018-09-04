import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const styles = {
  circularProgress: {
    margin: "30px 0"
  },
  innerPadding: {
    padding: "30px"
  }
};

const fakeData = {
  kompetanse: ["Html", "Css", "Javascript", "React.js", "Git Workflow"],
  kunnskap: ["Photoshop", "UX"]
}


class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: "deletethisinfo"
    }
    const url = "https://api.github.com/users/Danielnet/repos"

  }



  handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  getDataFromWebsite(url) {
    let info = fetch(url)
      .then(this.handleErrors)
      .then(function (response) {
        return (response.json());
      }).catch(function (error) {
        console.log(error);
      }).then(json =>
        this.setState({ info: json }))
  }


  componentDidMount() {
    this.props.updateTitle("Dashboard");
  }


  render() {
    const { classes } = this.props;

    if (this.state.info) {
      return <div className="home-content">
        <div className={classes.innerPadding}>
          <div className={classes.innermargin}>
            <h2>Kjernekompetanse</h2>
            <Divider />
            <div className={classes.innerPadding}>
              {fakeData.kompetanse.map(
                x => <Chip label={x} />)}
            </div>
          </div>
          <div className={classes.centered}>
            <h2>Generell Kunnskap</h2>
            <Divider />
            <div className={classes.innerPadding}>
              {fakeData.kunnskap.map(
                x => <Chip label={x} />)}
            </div>
          </div>
        </div>
      </div>
    }
    else
      return <div className="home-content">
      </div>
  }
}

export default withStyles(styles)(Dashboard);
