import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const fakeData = {
  kompetanse: ["Html", "Css", "Javascript", "React.js", "Git Workflow"],
  kunnskap: ["Photoshop", "UX"]
}



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
    marginRight: '10px'

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
    width: 200,
  },
  menu: {
    width: 200,
  },
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});



class Kompetanse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      name: '',
      rank: 1,
      formIsValid: "false",
      open: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitData = this.submitData.bind(this);
  }


  componentDidMount() {
    this.props.updateTitle("Kompetanse");
  }

  getFakeDataDisplay() {
    if (this.state.category === "Generell kunnskap") {
      return <h2> {fakeData.kunnskap.map(chipname => <Chip label={chipname} />)}</h2>
    }
    else
      return <h2> {fakeData.kompetanse.map(chipname => <Chip label={chipname} />)}</h2>
  }


  getValidationState() {
    const length = this.state.name.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };


  validateFormData(data) {
    if (data.category && data.name) {
      return true
    }
    else
      return false
  }


  submitData(e) {
    e.preventDefault();

    const formData = {
      category: this.state.category,
      name: this.state.name,
      rank: this.state.rank
    }
    if (this.validateFormData(formData)) {
      this.setState({ open: true })
      alert(
        `Post Request : {
        category: ${this.state.category},
        name: ${this.state.name},
        rank: ${this.state.rank}
      }`)
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
      <h1>Add a new Skill</h1>
      <div className={classes.inputContainer}>
        <form className={classes.container} noValidate autoComplete="off" onSubmit={this.submitData}>
          <TextField
            id="select-category"
            select
            label="Category"
            className={classes.textField}
            value={this.state.category}
            onChange={this.handleChange('category')}
            defaultValue="Kompetanse"
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Velg Kompetanse"
            margin="normal"
            required="true"
          >
            <MenuItem key={1} value="Kjernekompetanse">
              Kjernekompetanse
              </MenuItem>
            <MenuItem key={2} value="Generell kunnskap">
              Generell kunnskap
              </MenuItem>
            ))
            {this.state.category}
          </TextField>

          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            required="true"
            type="text"
          />

          <TextField
            id="rank"
            label="Index"
            className={classes.textField}
            value={this.state.rank}
            onChange={this.handleChange('rank')}
            margin="normal"
            helperText="Velg hvor postering skal dukke opp i listen, evt slettes"
            type="number"
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
            message={<span id="message-id">{this.state.name} Skill Added</span>}
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


      {(this.state.category) ? this.getFakeDataDisplay() : ""}

      <Divider />
      <div>
        <br />
        <h2>{(this.state.name) ? "Add / delete" : ""} {(this.state.name) ? <Chip label={this.state.name} /> : ""}</h2>
      </div>
    </div>
  }
}

export default withStyles(styles)(Kompetanse);
