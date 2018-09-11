import React, { Component } from 'react'
import Divider from '@material-ui/core/Divider'
import { withStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'
import { getApiDataAndSetState } from '../actions'

const styles = {
  circularProgress: {
    margin: "30px 0"
  },
  innerPadding: {
    padding: "30px"
  }
}


class Dashboard extends Component {

  componentDidMount() {

      this.props.getApiDataAndSetState()
    
  }


  render() {
    const { classes } = this.props
    const { kompetanse } = this.props.state
    const { kunnskap } = this.props.state

    
    if (kompetanse.length || kunnskap.length) {
      return <div className="home-content">
        <div className={classes.innerPadding}>
          <div className={classes.innermargin}>
            <h2>Kjernekompetanse</h2>
            <Divider />
            <div className={classes.innerPadding}>
              {kompetanse.map(
                (x, index) => <Chip key={index} label={x} />)}
            </div>
          </div>
          <div className={classes.centered}>
            <h2>Generell Kunnskap</h2>
            <Divider />
            <div className={classes.innerPadding}>
              {kunnskap.map(
                (x, index) => <Chip key={index} label={x} />)}
            </div>
          </div>
        </div>
      </div>
    }
    else
      return <div className="home-content" style={{ textAlign: "center", display: "inherit" }}>
        < CircularProgress />
      </div>
  }
}


Dashboard.propTypes = {
  classes: PropTypes.object,
  state: PropTypes.shape({
    kompetanse: PropTypes.arrayOf(
      PropTypes.string
    ),
    kunnskap: PropTypes.arrayOf(
      PropTypes.string
    )
  }
  )
}


function mapStateToProps(state) {
  return { state }
}


const mapDispatchToProps = {
  getApiDataAndSetState
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Dashboard))