import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 

import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import CategoryPage from "./containers/CategoryPage";
import BlogPage from "./containers/BlogPage";
import Menu from "./components/Menu";

class Routes extends Component {
  render() {
    return (
      <Router>
       <MuiThemeProvider>
        <div>
          <Menu />
          <Route exact path="/" component={HomePage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/blog/:articleId' component={BlogPage} />
          <Route path="/categories/:categoryId" component={CategoryPage} />
        </div>
       </MuiThemeProvider>
      </Router>
    );
  }
}

export default Routes;