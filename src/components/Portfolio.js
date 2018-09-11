import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { addSkillOrProject } from '../actions'
import { connect } from 'react-redux'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: '50px',

  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '50px'
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '10px',
    marginTop: '30px'

  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '98%',
  },
  menu: {
    width: 200,
  },
});



class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: "John Conway's Game Of Life",
      _content: "Simulering basert på John Conway's Game of Life. Celle aktivitet bestemmes utifra antall naboer",
      category: "React",
      _img: "https://github.com/Danielnet/React-Projects/raw/master/Game-Of-Life/screenshot.png?raw=true",
      tech: ["React","Game"],
      _link: "https://codepen.io/Daniel-Codepen/full/QrpvbL/",
      gitLink: "https://github.com/Danielnet/React-Projects/tree/master/Game-Of-Life"
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitData = this.submitData.bind(this);
  }


  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  componentDidMount() {
  }


  validateFormData(data) {
    if (data.headline && data._content && data.category && data._img && data.tech && data._link && data.gitLink) {
      return true
    }
    else
      return false
  }


  submitData(e) {
    e.preventDefault();

    const formData = {

      headline: this.state.headline,
      _content: this.state._content,
      category: this.state.category,
      _img: this.state._img,
      tech: this.state.tech,
      _link: this.state._link,
      gitLink: this.state.gitLink
    }

    if (this.validateFormData(formData)) {
      this.setState({ open: true })
      //alert("Post Requst : " + Object.values(this.state).map(x => x));
      this.props.addSkillOrProject(formData)
    }
  }


  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return <div className={classes.root}>

      <h1>Add a new Project</h1>
      <form onSubmit={this.submitData}>
        <TextField
          id="headline"
          label="Headline"
          className={classes.textField}
          onChange={this.handleChange('headline')}
          margin="normal"
          value={this.state.headline}
        />
        <TextField
          id="_content"
          label="Project Content"
          className={classes.textField}
          value={this.state._content}
          onChange={this.handleChange('_content')}
          margin="normal"
        /><TextField
          id="category"
          label="Category"
          className={classes.textField}
          value={this.state.category}
          onChange={this.handleChange('category')}
          margin="normal"
        /><TextField
          id="_img"
          label="Picture"
          className={classes.textField}
          value={this.state._img}
          onChange={this.handleChange('_img')}
          margin="normal"
        />
        <TextField
          id="tech"
          label="Tecnology"
          className={classes.textField}
          value={this.state.tech}
          onChange={this.handleChange('tech')}
          margin="normal"
        />
        <TextField
          id="_link"
          label="Project Link"
          className={classes.textField}
          value={this.state._link}
          onChange={this.handleChange('_link')}
          margin="normal"
        />
        <TextField
          id="gitLink"
          label="gitLink"
          className={classes.textField}
          value={this.state.gitLink}
          onChange={this.handleChange('gitLink')}
          margin="normal"
        />

        <div className={classes.button}>
          <Button type="submit" variant="contained" color="primary" className={classes.button}>
            Upload
            <CloudUploadIcon className={classes.rightIcon} />
          </Button>
          {/* <Button variant="contained" color="secondary" className={classes.button}>
            Delete
            <DeleteIcon className={classes.rightIcon} />
          </Button> */}
        </div>


        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.state.name} Project Added</span>}
          action={[
            <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
              UNDO
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </form>
    </div>
  }
}


function mapStateToProps(state) {
  return { reduxState: state }
}

const mapDispatchToProps = {
  addSkillOrProject
}

// export default Posts;

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Portfolio))