import React, { Component,Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper,Divider } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const styles = theme => ({
  root: {
    display:'flex',
    flexDirection:'column',
    margin:'50px',

  },
  inputContainer: {
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    marginBottom:'50px'
  },
  button: {
    display:'flex',
    alignItems:'center',
    marginRight:'10px',
    marginTop:'30px'

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
constructor(props){
  super(props);
  this.state = {
    headline:"Omnitech AS template",
    _content:"Webside template utviklet for Omnitech. Siden er under arbeid, så lastetid ikke optimalisert ",
    category: "Website",
    _img: "http://www.omnitech.no/img/Omnilogo.png",
    tech: ["Skeleton CSS"],
    _link: "http://www.skalkeskjul.no/Omnitemplate/",
    gitLink:"https://github.com/Danielnet/Websites/tree/master/Omnitech-Template"
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitData = this.submitData.bind(this);
  }


  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  componentDidMount(){
    this.props.updateTitle("Portfolio");
  }


  validateFormData(data){
    if(data.headline && data._content && data.category && data._img && data.tech && data._link && data.gitLink){
      return true
    }
    else
    return false
  }


  submitData(e){
    e.preventDefault();

    const formData = {

        headline: this.state.headline,
        _content: this.state._content,
        category: this.state.category,
        _img: this.state._img,
        tech:this.state.tech,
        _link:this.state._link,
        gitLink:this.state.gitLink
    }

    if(this.validateFormData(formData)){
      this.setState({open:true})
alert("Post Requst : " +Object.values(this.state).map(x => x));
      }
    }


      handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }

        this.setState({ open: false });
      };

  render(){



const { classes } = this.props;

        return <div className={classes.root}>

          <h1>Add a new Project</h1>
          <form onSubmit={this.submitData}>
          <TextField
            id="name"
            label="headline"
            className={classes.textField}
            value={this.state.headline}
            onChange={this.handleChange('name')}
            margin="normal"
          />
          <TextField
          id="name"
          label="Project Content"
          className={classes.textField}
          value={this.state._content}
          onChange={this.handleChange('name')}
          margin="normal"
        /><TextField
          id="name"
          label="Category"
          className={classes.textField}
          value={this.state.category}
          onChange={this.handleChange('name')}
          margin="normal"
        /><TextField
          id="name"
          label="Picture"
          className={classes.textField}
          value={this.state._img}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          id="name"
          label="Tecnology"
          className={classes.textField}
          value={this.state.tech}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          id="name"
          label="Project Link"
          className={classes.textField}
          value={this.state._link}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          id="name"
          label="gitLink"
          className={classes.textField}
          value={this.state.gitLink}
          onChange={this.handleChange('name')}
          margin="normal"
        />

        <div className={classes.button}>
          <Button type="submit" variant="contained" color="primary" className={classes.button}>
            Upload
            <CloudUploadIcon className={classes.rightIcon} />
          </Button>

          <Button variant="contained" color="secondary" className={classes.button}>
            Delete
            <DeleteIcon className={classes.rightIcon} />
          </Button>
        </div>
        {/* SnackBar */}

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

// export default Posts;
export default withStyles(styles)(Portfolio);
