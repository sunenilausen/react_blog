import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  }
});

import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import BlogPage from "./containers/BlogPage";

class Routes extends Component {
  render() {
    return (
      <Router>
         <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/blog' component={BlogPage} />
          </div>
         </MuiThemeProvider>
      </Router>
    );
  }
}

export default Routes;