import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 


import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import BlogPage from "./containers/BlogPage";
import CategoryPage from "./containers/CategoryPage";
import Menu from "./components/Menu";

const Categories = ({ match }) => (
  <Route path={`${match.url}/:categoryId`} component={Category}/>
)

const Category = ({ match }) => (
  <CategoryPage name={match.params.categoryId}/>
)

class Routes extends Component {
  render() {
    return (
      <Router>
       <MuiThemeProvider>
        <div>
          <Menu />
          <Route exact path="/" component={HomePage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/blog' component={BlogPage} />
          <Route path="/categories" component={Categories} />
        </div>
       </MuiThemeProvider>
      </Router>
    );
  }
}

export default Routes;