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

const styles = {
  Aligner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  AlignerItem: {
    marginTop: '1rem',
    width: '60%',
  }
}

class Routes extends Component {
  render() {
    return (
      <Router>
       <MuiThemeProvider>
        <div>
          <Menu />
          <div style={styles.Aligner}>
            <Route exact path="/" component={HomePage} style={styles.AlignerItem} />
            <Route path='/login' component={LoginPage} style={styles.AlignerItem} />
            <Route path='/blog/:articleId' component={BlogPage} style={styles.AlignerItem} />
            <Route path="/categories/:categoryId" component={CategoryPage} style={styles.AlignerItem} />
          </div>
        </div>
       </MuiThemeProvider>
      </Router>
    );
  }
}

export default Routes;