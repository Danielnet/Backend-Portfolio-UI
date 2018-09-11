import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import Header from './components/header'
import Menu from './components/menu'
import Dashboard from './components/Dashboard'
import Portfolio from './components/Portfolio'
import Kompetanse from './components/Kompetanse'
import About from './components/About'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core/'
import { BrowserRouter as Router, Route } from 'react-router-dom'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "Dashboard"
    }
    this.updateTitle = this.updateTitle.bind(this)
  }


  updateTitle = (newTitle) => {
    this.setState(
      {
        title: newTitle
      })
  }


  render() {
    const theme = createMuiTheme({
      header: {
        background: this.state.titleBackground
      },
    });

    return (
      
      <div className="App">
        <Router>
          <MuiThemeProvider theme={theme}>
            <div className="header" >
              <Header title={this.props.state.headerTitle} />
            </div>
            <div className="menu">
              <Menu title="Daniel Eidså" />
            </div>
            {/* {ROUTING SYSTEM } */}
            <div>
              <Route exact path="/" render={() => (<Dashboard />)} />
              <Route exact path="/Dashboard" render={() => (<Dashboard />)} />
              <Route exact path="/Kompetanse" render={() => (<Kompetanse data={this.state} updateTitle={this.updateTitle} />)} />
              <Route exact path="/Portfolio" render={() => (<Portfolio data={this.state} updateTitle={this.updateTitle} />)} />
              <Route exact path="/About" render={() => (<About data={this.state} updateTitle={this.updateTitle} />)} />
            </div>
            {/* {END OF ROUTING SYSTEM} */}
            <Paper className="footer"><h4>Created by @ Daniel Eidså</h4></Paper>
          </MuiThemeProvider>
        </Router>
      </div>
    );
  }




}


function mapStateToProps(state) {
  return {state}
}

export default connect(mapStateToProps)(App);